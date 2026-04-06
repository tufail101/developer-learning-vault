"""This example combines a condition with a loop."""

scores = [55, 72, 91, 48]

for score in scores:
    if score >= 70:
        print(score, "is a passing score")
    else:
        print(score, "needs more work")
