# 3D-carousel
The 3d carousel shuffling
## 3d旋转木马轮播图
* ### [Demo](http://www.strongfanfan.top/3D-carousel/demo)

* ### 兼容ie9+的浏览器

* ### 已封装好，无变量污染

* ### 使用方法
    1. HTML目录结构
     
    ```html
    <section class="stage-carousel">
         <div class="wrap-carousel">
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
             <figure class="figure-carousel"><img src=yourImgPath></figure>
         </div>
         <div class="nav-carousel">
         </div>
     </section>
     ```
     2. CSS文件引入
     
     在`<head>`中引用
     
     ```<link rel="stylesheet" href="styles/styles.css">```
    
    舞台大小和视角远近可以在css文件中自行修改
    
    3.  JavaScript文件引入
    
        1. 在引入js文件前写入配置信息carousel
        
              ```
                <script>
                 var carousel={
                     count:9,//图片个数
                     width:240 //图片宽度，不要加px
                 }
                 </script>
              ```
        2. 在闭合`</body>`前引入js文件
            
            ```<script src="scripts/all.js"></script>```
            
    4. 文件在dist目录下
        
     
      
        

     
