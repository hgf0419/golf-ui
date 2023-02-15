<template>
  <div>
    <div class="title">类型</div>

    <gf-panel title="这是标题">
      <div>这是一段信息</div>
    </gf-panel>
    <gf-panel title="这是标题 - info" type="info">
      <div>这是一段信息</div>
    </gf-panel>

    <gf-panel title="这是标题 - info" type="white">
      <div>这是一段信息</div>
    </gf-panel>

    <div class="title">无分割线</div>

    <gf-panel title="这是标题" no-divider>
      <div>这是一段信息</div>
    </gf-panel>
    <gf-panel title="这是标题 - info" type="info" no-divider>
      <div>这是一段信息</div>
    </gf-panel>

    <gf-panel title="这是标题 - info" type="white" no-divider>
      <div>这是一段信息</div>
    </gf-panel>

   


    <div class="title">插槽 - title </div>
    <gf-panel>
      <template v-slot:title>
        <div>🏃‍♂️ 这是插槽标题 <small>副标题</small></div>
      </template>
      <div>这是内容</div>
    </gf-panel>

    <div class="title">可切换 </div>
    <gf-panel title="这是标题" toggle>
      <div>这是内容</div>
    </gf-panel>

    <div class="title">默认收起 </div>
    <gf-panel title="这是标题 - 默认收起" toggle collapsed>
      <div>这是内容</div>
    </gf-panel>




    <div class="title">无边框</div>
    <gf-panel title="这是标题 - 无边框" no-border>
      <div>这是一段信息</div>
    </gf-panel>
  </div>
</template>


