"""This example shows one function returning a value and another formatting that value."""


def calculate_total(price, tax_rate):
    tax_amount = price * tax_rate
    return price + tax_amount


def format_receipt(item_name, total):
    return f"{item_name}: ${total:.2f}"


item_name = "Notebook"
receipt_total = calculate_total(12.50, 0.08)
receipt_line = format_receipt(item_name, receipt_total)

print("The function returned this total:", receipt_total)
print("The formatted receipt line is:", receipt_line)
