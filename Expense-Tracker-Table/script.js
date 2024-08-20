<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Expense Tracker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        table {
            border-collapse: collapse;
            width: 80%;
            max-width: 600px;
            background-color: white;
            border: 1px solid #ccc;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f8f8f8;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        caption {
            caption-side: top;
            padding: 10px;
            font-size: 1.2rem;
            font-weight: bold;
        }

        colgroup col:nth-child(4) {
            background-color: #e8f4e8;
        }

        .total {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <table>
        <caption>Personal Expense Tracker</caption>
        <colgroup>
            <col style="width: 20%;">
            <col style="width: 40%;">
            <col style="width: 20%;">
            <col style="width: 20%;">
        </colgroup>
        <thead>
            <tr>
                <th>Date</th>
                <th>Expense Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-08-19</td>
                <td>Lunch</td>
                <td>Food</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>2024-08-20</td>
                <td>Bus Ticket</td>
                <td>Transport</td>
                <td>$3.00</td>
            </tr>
            <tr>
                <td>2024-08-21</td>
                <td>Coffee</td>
                <td>Food</td>
                <td>$4.50</td>
            </tr>
            <tr class="total">
                <td colspan="3">Total</td>
                <td>$19.50</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
