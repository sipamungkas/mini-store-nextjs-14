import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PaymentsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Payments</CardTitle>
        <CardDescription>View and manage payment transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TRX001</TableCell>
              <TableCell>#1001</TableCell>
              <TableCell>$99.99</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>2023-05-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TRX002</TableCell>
              <TableCell>#1002</TableCell>
              <TableCell>$149.99</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>2023-05-16</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
