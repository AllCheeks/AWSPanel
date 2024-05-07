import os

def write_files_to_file(dir_path, output_file, blacklist):
    with open(output_file, 'w', encoding='utf-8') as out:
        for root, dirs, files in os.walk(dir_path, topdown=True):
            # 过滤掉黑名单中的文件夹
            dirs[:] = [d for d in dirs if d not in blacklist]
            for file in files:
                if file in blacklist:
                    continue  # 如果文件名在黑名单中，跳过此文件
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        out.write(f"内容来自文件: {file_path}\n")
                        out.write(f.read())
                        out.write("\n" + "-" * 40 + "\n")  # 分隔线
                except Exception as e:
                    out.write(f"无法读取文件: {file_path}，错误: {e}\n")

# 设置文件和文件夹的黑名单
blacklist = ["LICENSE","go.sum","package-lock.json",".github",".git","1.txt","go.mod","assets","node_modules","css","img","js"]

# 开始从当前文件夹递归地写入文件内容到 1.txt，跳过黑名单中的文件和文件夹
write_files_to_file(".", "1.txt", blacklist)
