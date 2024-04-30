mkdir -p build/web  # 创建Build文件夹以及其中的web子文件夹
CGO_ENABLED=1 go build  # 构建Go项目
mv Aws-Panel build/  # 将构建好的Aws-Panel移动到Build文件夹中
cd ./web/
npm install  # 安装依赖
npm run build  # 构建前端项目
mv dist/* ../build/web/  # 将构建好的前端文件移动到Build/web中
cd ..
rm -rf tmp  # 清理tmp文件夹
