import moment from 'moment';
import { userPromotionConfigUpdate } from '@/api';

export const state = {
  confirmLoading: false, // 异步关闭loading
  visible: false, // 显示隐藏模态框
  formRef: null,
  form: {
    endTime: moment(),
    startTime: moment(),
  },
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export const rules = {
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

// TODO: any 类型检测
export const updateData = (item: any) => {
  if (state.formRef) {
    (state.formRef as any).resetFields();
  }
  state.form = { ...item };
  state.form.endTime = moment(item.endTime);
  state.form.startTime = moment(item.startTime);
  state.visible = true;
};

export const updateUserPromotionConfig = async () => {
  try {
    const validate = await (state.formRef as any).validate();
    if (validate) {
      const params = {
        ...state.form,
        startTime: state.form.startTime.valueOf(),
        endTime: state.form.endTime.valueOf(),
      };
      const res = await userPromotionConfigUpdate(params);
      if ((res as any).code === 0) {
        return true;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
};
