"""This example shows how a URL pattern points to a view name."""

route_map = {
    "/": "home view",
    "/about/": "about view",
    "/contact/": "contact view",
}

print("A Django URL pattern chooses which view handles a request:\n")

for url, view_name in route_map.items():
    print(f"{url} -> {view_name}")
