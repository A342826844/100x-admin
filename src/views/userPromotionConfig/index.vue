<template>
  <a-table :columns="columns" :rowKey="record => record.id" :data-source="state.data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span><smile-outlined /> Name</span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a @click="updateData(record)">修改</a>
      </span>
    </template>
  </a-table>
  <a-modal
    title="活动配置"
    v-model:visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
  >
    <a-form ref="ruleForm" :rules="rules" :model="state.form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="活动类型">
        <a-select disabled v-model:value="state.form.type" placeholder="请选择活动类型">
          <a-select-option v-for="item in UserPromotionType" :key="item.key" :value="item.key">
            {{item.value}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item name="startTime" label="活动开始时间">
        <a-date-picker
          v-model:value="state.form.startTime"
          show-time
          :locale="locale"
          type="date"
          placeholder="请旋转时间"
          style="width: 100%;"
        />
      </a-form-item>
      <a-form-item name="endTime" label="'活动结束时间">
        <a-date-picker
          v-model:value="state.form.endTime"
          show-time
          :locale="locale"
          type="date"
          placeholder="请旋转时间"
          style="width: 100%;"
        />
      </a-form-item>
      <a-form-item name="presentAmount" label="赠送金额">
        <a-input-number v-model:value="state.form.presentAmount" />
      </a-form-item>
      <!-- <a-form-item label="赠送比例">
        <a-input v-model:value="state.form.presentRate" />
      </a-form-item> -->
      <a-form-item label="状态">
        <a-switch checked-children="启用" un-checked-children="禁用" v-model:checked="state.form.status" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
import moment from 'moment';
import { SmileOutlined } from '@ant-design/icons-vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { UserPromotionType, UserPromotionTypeMap, CommonStatusMap } from '@/commons/index';
import { userPromotionConfigList, userPromotionConfigUpdate } from '@/api';

const columns = [
  {
    title: '活动类型',
    key: 'type',
    dataIndex: 'type',
    customRender: ({ text }) => UserPromotionTypeMap[text],
  },
  {
    title: '活动开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '活动结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '赠送金额',
    key: 'presentAmount',
    dataIndex: 'presentAmount',
    // customRender: ({ text }) => UserPromotionTypeMap[text],
  },
  // {
  //   title: '赠送比例',
  //   key: 'presentRate',
  //   dataIndex: 'presentRate',
  // },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    customRender: ({ text }) => CommonStatusMap[text],
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataIndex: 'createdAt',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
];

const defalutForm = {
  type: 1,
  startTime: moment(2).format(),
  endTime: moment(3).format(),
  presentAmount: 100,
  presentRate: 0,
  status: true,
  createdAt: 1608659486000,
};

const rules = {
  endTime: [
    {
      required: true, message: '请选择时间', trigger: 'change', type: 'object',
    },
  ],
  startTime: [
    {
      required: true, message: '请选择时间', trigger: 'change', type: 'object',
    },
  ],
  presentAmount: [
    {
      required: true, type: 'number', message: '请输入赠送金额', trigger: 'blur',
    },
  ],
};

export default defineComponent({
  components: {
    SmileOutlined,
    // DownOutlined,
  },
  setup() {
    // 异步关闭loading
    const confirmLoading = ref(false);
    // 显示隐藏模态框
    const visible = ref(false);

    const state = reactive({
      data: [],
      form: defalutForm,
    });

    const ruleForm = ref(null);

    const labelCol = reactive({ span: 6 });
    const wrapperCol = reactive({ span: 14 });

    const updateData = (item) => {
      if (ruleForm.value) {
        ruleForm.value.resetFields();
      }
      state.form = { ...item };
      state.form.endTime = moment(item.endTime);
      state.form.startTime = moment(item.startTime);
      visible.value = true;
    };

    const getUserPromotionList = async () => {
      try {
        const res = await userPromotionConfigList();
        state.data = res.data;
        return res.data;
      } catch (e) {
        console.log(e);
        return [];
      }
    };

    const updateUserPromotionConfig = async () => {
      console.log(ruleForm);
      try {
        const validate = await ruleForm.value.validate();
        if (validate) {
          const params = {
            ...state.form,
            startTime: state.form.startTime.valueOf(),
            endTime: state.form.endTime.valueOf(),
          };
          const res = await userPromotionConfigUpdate(params);
          if (res.code === 0) {
            return true;
          }
        }
        return false;
      } catch (e) {
        return false;
      }
    };

    const handleOk = async () => {
      confirmLoading.value = true;
      const res = await updateUserPromotionConfig();
      if (res) {
        confirmLoading.value = false;
        visible.value = false;
        getUserPromotionList();
      } else {
        confirmLoading.value = false;
      }
    };

    getUserPromotionList();

    return {
      state,
      rules,
      columns,
      confirmLoading,
      visible,
      handleOk,
      labelCol,
      wrapperCol,

      updateData,
      ruleForm,

      locale,

      UserPromotionType,
    };
  },
});
</script>
