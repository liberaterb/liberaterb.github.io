var text20210711_01 = 
`
* 一般元素中的`vertical-align`只会对文字有效，不会对子元素生效，但是td中的`vertical-align`对子元素也有效，默认是middle



* 表格的一些css样式：
  1. border-spacing：边框之间的距离
  2. border-collapse：设置边框的合并
  3. tr:nth-child(2n+1)或tr:nth-child(odd) 对奇数行设置样式，tr:nth-child(2n)或tr:nth-child(even) 对偶数行设置样式



* 表格的rowspan合并行，colspan合并列



* 一些语义化标签
  * thead
  * tbody
  * tfoot
  * th 用在thead中



* 如果表格中没有使用tbody，而是直接使用tr，那么浏览器也会自动创建一个tbody，并将tr都放在tbody中，所以tr永不会是table的直接子元素

`