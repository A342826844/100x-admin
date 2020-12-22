import { App } from 'vue';
import {
  Button,
  Layout,
  Menu,
  Table,
  Tag,
  Divider,
} from 'ant-design-vue';

export default (app: App) => {
  if (app) {
    app.use(Button);
    app.use(Layout);
    app.use(Menu);
    app.use(Table);
    app.use(Tag);
    app.use(Divider);
  }
};
