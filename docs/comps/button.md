# Button 按钮
常用的操作按钮

## 基础用法

<template>
    <div>
        <demo>
            <g-button>测试按钮</g-button>
            <g-button type="primary">测试按钮</g-button>
        </demo>
        <demo>
            <g-button plain>测试按钮</g-button>
            <g-button type="primary" plain>测试按钮</g-button>
        </demo>
        <demo>
            <g-button straight>测试按钮</g-button>
            <g-button type="primary" straight>测试按钮</g-button>
        </demo>
        <demo>
            <g-button size="small">测试按钮</g-button>
            <g-button>测试按钮</g-button>
            <g-button size="large">测试按钮</g-button>
        </demo>
        <demo>
            <g-button shape="ellipse">测试按钮</g-button>
            <g-button shape="square">测试</g-button>
            <g-button shape="circle">测试</g-button>
        </demo>
        <demo>
            <g-button disabled>测试按钮</g-button>
            <g-button disabled type="primary">测试按钮</g-button>
        </demo>
        <demo>
            <g-button bg="#f90">测试按钮</g-button>
            <g-button bg="linear-gradient(to right, #ff6034, #ee0a24)">测试按钮</g-button>
            <g-button color="blue">测试按钮</g-button>
            <g-button bg="#f90" color="#f00">测试按钮</g-button>
        </demo>
    </div>
</template>

```
<demo>
    <g-button>测试按钮</g-button>
    <g-button type="primary">测试按钮</g-button>
</demo>
<demo>
    <g-button plain>测试按钮</g-button>
    <g-button type="primary" plain>测试按钮</g-button>
</demo>
<demo>
    <g-button straight>测试按钮</g-button>
    <g-button type="primary" straight>测试按钮</g-button>
</demo>
<demo>
    <g-button size="small">测试按钮</g-button>
    <g-button>测试按钮</g-button>
    <g-button size="large">测试按钮</g-button>
</demo>
<demo>
    <g-button shape="ellipse">测试按钮</g-button>
    <g-button shape="square">测试</g-button>
    <g-button shape="circle">测试</g-button>
</demo>
<demo>
    <g-button disabled>测试按钮</g-button>
    <g-button disabled type="primary">测试按钮</g-button>
</demo>
<demo>
    <g-button bg="#f90">测试按钮</g-button>
    <g-button bg="linear-gradient(to right, #ff6034, #ee0a24)">测试按钮</g-button>
    <g-button color="blue">测试按钮</g-button>
    <g-button bg="#f90" color="#f00">测试按钮</g-button>
</demo>

```

### Attributes
| 参数      | 说明          | 类型       | 可选值                          | 默认值   |
|---------- |-------------- |-----------|---------------------------------|----------|
| type      | 类型          | string    | base / primary                   | base    |
| plain     | 是否朴素按钮   | boolean   |-                                | false    |
| straight  | 是否直角按钮   | boolean   |-                                | false    |
| disabled  | 是否禁用状态   | boolean   |-                                | false    |
| size      | 大小          | string     | small / large                   |-         |
| shape     | 形状          | string     | ellipse / square / circle       |-         |
| bg        | 背景颜色        | string     |-                                |-         |
| color     | 字体颜色      | string    |-                                |-         |
