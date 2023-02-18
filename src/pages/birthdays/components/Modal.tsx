import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";

interface IModalProps {
    isOpen: boolean;
    message: string;
    handleClose: () => void;
};

export const Modal = ({ isOpen, message, handleClose }: IModalProps) => (
    <Dialog onClose={handleClose} open={isOpen}>
        <DialogContent>
            <DialogContentText>
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} autoFocus>OK</Button>
        </DialogActions>
    </Dialog>
);