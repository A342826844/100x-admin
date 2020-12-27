type TableColumnsItem = {
    align?: 'left' | 'right' | 'center';
    // default: left
    // 设置列内容的对齐方式

    ellipsis?: boolean;
    // default: false
    // 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 时，表格布局将变成 tableLayout="fixed"。

    colSpan?: number;
    // default:
    // 表头列合并,设置为 0 时，不渲染

    dataIndex?: string;
    // default: -
    //  列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
    defaultFilteredValue?: string[];
    // default: -
    // 默认筛选值

    filterDropdown?: VNode;
    // default:
    // 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互

    filterDropdownVisible?: boolean;
    // default: -
    // 用于控制自定义筛选菜单是否可见

    filtered?: boolean;
    // default: false
    // 标识数据是否经过过滤，筛选图标会高亮

    filteredValue?: string[];
    // default: -
    // 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组

    filterIcon?: VNode | ((filtered: boolean, column: Column) => vNode) | slot;
    // default: false
    // 自定义 filter 图标。

    filterMultiple?: boolean;
    // default: true
    // 是否多选

    filters?: object[];
    // default: -
    // 表头的筛选菜单项

    fixed?: boolean|string;
    // default: false
    // 列是否固定，可选 true(等效于 left) 'left' 'right'

    key?: string;
    // default: -
    // Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性

    customRender?: (row: { text: string}) => any;
    // default:
    // 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并    Function(text, record, index) {}|slot-scope -
    sorter?: Function|boolean;
    // default: -
    // 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true

    sortOrder?: boolean|string;
    // default: -
    // 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false

    sortDirections?: Array<string>;
    // default: ['ascend', 'descend']
    // 支持的排序方式，取值为 'ascend' 'descend'

    title?: string|slot;
    // default: -
    // 列头显示文字

    width?: string|number;
    // default: -
    // 列宽度

    customCell?: (record, rowIndex) => any;
    // default: -
    // 设置单元格属性

    customHeaderCell?: (column) => any;
    // default: -
    // 设置头部单元格属性

    onFilter?: Function;
    // default: -
    // 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用

    onFilterDropdownVisibleChange?: (visible) => any;
    // default: -
    // 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownVisibleChange事件使用

    slots?: object;
    // default: -
    // 使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}

    scopedSlots?: object;
    // 使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'}
}
