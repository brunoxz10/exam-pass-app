import { Box, Modal, Typography } from "@mui/material";
import React from "react";

interface Props {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    result: number;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ResultModal({ openModal, setOpenModal, result }: Props) {

    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Resultado
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Sua probabilidade de aprovação é {result * 100} %
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}