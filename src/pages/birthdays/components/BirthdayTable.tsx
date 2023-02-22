import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { BirthdayEntry } from "store/birthdays";

interface IDataTableProps {
    data: BirthdayEntry[];
};

export const BirthdayTable = ({ data }: IDataTableProps) => (
    <TableContainer component={Paper} data-testid="birthdays-table">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Year</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { data.length
                ? data.map((x, i) => (
                    <TableRow key={i}>
                        <TableCell>{x.text}</TableCell>
                        <TableCell align="right">{x.year}</TableCell>
                    </TableRow>
                ))
                : (
                    <TableRow>
                        <TableCell colSpan={2} align="center">No data</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
);