# tips组件

### 使用方式

#### 在 scripts 中引用组件:

```
import Tips from '@/components/fx-tips/fx-tips.vue';
export default {
    components: {
        Tips
    }
}
</script>

```

#### 在 template  中引用组件:
```
<fx-tips ref="Tips" Tipstext="提示显示文字" BckgroundColor="背景色" Color="文字颜色" time="提示显示动画的时长(单位:s)" Height="提示框高度(单位:rpx)" FontsSize="提示文字大小"></fx-tips>
```

#### 调用组件:

```
export default {
    onLoad() {
        this.$refs.Tips.show();
    }
}
</script>
```

### 属性说明:


| 属性            | 类型                     | 默认值 | 描述                                       |
| --------------- | ------------------------ | ---- | ------------------------------------------ |
| Tipstext        | String                   | 无   | 提示显示文字                                   |
| BckgroundColor  | String                   | #3F5AFC   | 背景色                                   |
| Color      | String                 | #fff   | 文字颜色                                   |
| time          | Number String(单位:s)                  | 3   | 提示显示动画的时长 |
| Height      |  Number String(单位:rpx)                 | 60   | 提示框高度                                   |
| time          | Number String(单位:rpx)                 | 30   | 提示文字大小 |

### H5说明

H5使用的时候需加
```
page{
		overflow: hidden;
		height: 100%;
		position: relative;
	}
```