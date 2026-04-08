"""This example shows that lists and dictionaries can change, while the tuple stays fixed."""

products = ["keyboard", "mouse", "monitor"]
settings = {"theme": "dark", "font_size": 16}
window_size = (1280, 720)

products.append("webcam")
settings["font_size"] = 18

print("List after adding one item:", products)
print("Dictionary after updating one value:", settings)
print("Tuple staying the same:", window_size)
