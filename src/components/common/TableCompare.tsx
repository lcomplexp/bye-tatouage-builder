import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableCompare = ({ rows }: { rows: { label: string; a: string; b: string }[] }) => {
  return (
    <div className="rounded-lg border shadow-soft overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Zone/Taille</TableHead>
            <TableHead>Fourchette basse</TableHead>
            <TableHead>Fourchette haute</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{r.label}</TableCell>
              <TableCell>{r.a}</TableCell>
              <TableCell>{r.b}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCompare;
