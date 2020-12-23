import { App } from 'vue';
import {
  Button,
  Layout,
  Menu,
  Table,
  Tag,
  Divider,
  Modal,
  Form,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  Switch,
} from 'ant-design-vue';

export default (app: App) => {
  if (app) {
    app.use(Button);
    app.use(Layout);
    app.use(Menu);
    app.use(Table);
    app.use(Tag);
    app.use(Divider);
    app.use(Modal);
    app.use(Form);
    app.use(Input);
    app.use(InputNumber);
    app.use(Radio);
    app.use(Checkbox);
    app.use(Select);
    app.use(DatePicker);
    app.use(Switch);
  }
};
