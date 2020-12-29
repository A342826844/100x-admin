<template>
  <a-row type="flex" justify="end">
    <a-col >
      <a-form layout="inline" :model="formInline" @submit.prevent="handleSubmit">
        <a-form-item>
          <a-input v-model:value="formInline.userMobile" placeholder="手机号">
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formInline.userEmail" placeholder="邮箱">
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            搜索
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  ></a-table>
</template>

<script>
import { userOptionList } from '@/api';
// import moment from 'moment';

const columns = [
  {
    title: '用户ID',
    key: 'userId',
    dataIndex: 'userId',
  },
  {
    title: '金额',
    key: 'amount',
    dataIndex: 'amount',
  },
  {
    title: '币种',
    key: 'coin',
    dataIndex: 'coin',
    customRender: ({ text }) => `${text}`.toUpperCase(),
  },
  {
    title: '冻结',
    key: 'frozen',
    dataIndex: 'frozen',
    // customRender: ({ text }) => UserPromotionTypeMap[text],
  },
  {
    title: '用户手机号',
    key: 'userMobile',
    dataIndex: 'userMobile',
    customRender: ({ text }) => text || '--',
  },
  {
    title: '用户邮箱',
    key: 'userEmail',
    dataIndex: 'userEmail',
    customRender: ({ text }) => text || '--',
  },
  // {
  //   title: '创建时间',
  //   key: 'createdAt',
  //   dataIndex: 'createdAt',
  //   customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  // },
];

export default {
  components: {
  },
  data() {
    return {
      columns,
      data: [],
      pagination: {
        showTotal: (total, range) => `当前展示: ${range[0]}-${range[1]}, 总条数：${total}`,
      },
      loading: false,
      formInline: {
        userMobile: '',
        userEmail: '',
      },
      visible: false,
      confirmLoading: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleSubmit() {
      this.fetch({
        userMobile: this.formInline.userMobile || this.formInline.userMobile.trim(),
        userEmail: this.formInline.userEmail || this.formInline.userEmail.trim(),
      });
    },
    handleTableChange(pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      console.log(pagination);
      this.fetch(pagination);
    },
    fetch(pager = {}) {
      console.log(pager);
      const params = {
        length: pager.pageSize || 10,
        start: (pager.current - 1) * pager.pageSize || 0,
        userMobile: this.formInline.userMobile || this.formInline.userMobile.trim(),
        userEmail: this.formInline.userEmail || this.formInline.userEmail.trim(),
      };
      this.loading = true;
      userOptionList(params).then((result) => {
        const pagination = { ...this.pagination };
        pagination.total = result.recordsTotal;
        this.pagination = pagination;
        this.loading = false;
        this.data = result.data;
      });
    },
  },
};

</script>
