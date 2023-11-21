import os

def get_image_urls(folder_path):
    image_urls = []
    for root, _, files in os.walk(folder_path):
        for filename in files:
            if filename.endswith('.jpg') or filename.endswith('.png'):
                image_urls.append(os.path.join(root, filename))

    return image_urls

folder_path = "Assets/images/Champions"
image_urls = get_image_urls(folder_path)

# Convert image URLs to JavaScript array format
javascript_array = "[\n"
for image_url in image_urls:
    javascript_array += f"\t\"{image_url}\",\n"

javascript_array = javascript_array[:-2] + "\n]"

print(javascript_array)