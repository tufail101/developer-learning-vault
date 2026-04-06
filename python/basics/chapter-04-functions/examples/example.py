"""This example defines small reusable functions."""

def calculate_total(price, tax_rate):
    tax_amount = price * tax_rate
    return price + tax_amount


def format_receipt(item_name, total):
    return f"{item_name}: ${total:.2f}"

receipt_total = calculate_total(12.50, 0.08)
print(format_receipt("Notebook", receipt_total))
