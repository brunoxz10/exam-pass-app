import { Box, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { IForm } from '../../interfaces/IForm'
import http from '../../http'

export default function Form() {

    const [escoreBrutoP1Etapa1, setEscoreBrutoP1Etapa1] = useState<number>(0);
    const [escoreBrutoP2Etapa1, setEscoreBrutoP2Etapa1] = useState<number>(0);
    const [escoreBrutoP1Etapa2, setEscoreBrutoP1Etapa2] = useState<number>(0);
    const [escoreBrutoP2Etapa2, setEscoreBrutoP2Etapa2] = useState<number>(0);
    const [escoreBrutoP1Etapa3, setEscoreBrutoP1Etapa3] = useState<number>(0);
    const [escoreBrutoP2Etapa3, setEscoreBrutoP2Etapa3] = useState<number>(0);
    const [pseudoArgumentoFinal, setPseudoArgumentoFinal] = useState<number>(0);
    const [minFlag, setMinFlag] = useState<number>(0);
    const [medianFlag, setMedianFlag] = useState<number>(0);
    const [cotasNegrosFlag, setCotasNegrosFlag] = useState<number>(0);
    const [publicas1Flag, setPublicas1Flag] = useState<number>(0);
    const [publicas2Flag, setPublicas2Flag] = useState<number>(0);
    const [publicas3Flag, setPublicas3Flag] = useState<number>(0);
    const [publicas4Flag, setPublicas4Flag] = useState<number>(0);
    const [publicas5Flag, setPublicas5Flag] = useState<number>(0);
    const [publicas6Flag, setPublicas6Flag] = useState<number>(0);
    const [publicas7Flag, setPublicas7Flag] = useState<number>(0);
    const [publicas8Flag, setPublicas8Flag] = useState<number>(0);
    const [curso, setCurso] = useState<string>('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form: IForm = {
            escore_bruto_p1_etapa1: escoreBrutoP1Etapa1,
            escore_bruto_p2_etapa1: escoreBrutoP2Etapa1,
            escore_bruto_p1_etapa2: escoreBrutoP1Etapa2,
            escore_bruto_p2_etapa2: escoreBrutoP2Etapa2,
            escore_bruto_p1_etapa3: escoreBrutoP1Etapa3,
            escore_bruto_p2_etapa3: escoreBrutoP2Etapa3,
            pseudo_argumento_final: pseudoArgumentoFinal,
            min_flag: minFlag,
            median_flag: medianFlag,
            cotas_negros_flag: cotasNegrosFlag,
            publicas1_flag: publicas1Flag,
            publicas2_flag: publicas2Flag,
            publicas3_flag: publicas3Flag,
            publicas4_flag: publicas4Flag,
            publicas5_flag: publicas5Flag,
            publicas6_flag: publicas6Flag,
            publicas7_flag: publicas7Flag,
            publicas8_flag: publicas8Flag,
            course: curso
        }
    
        mutation.mutate(form);

        // alert(mutation.data.predictions.probability);
      }
    
    const mutation = useMutation((newForm: IForm) => {
        return http.post('predict', newForm)
    })

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
            <Typography component={"h1"} variant="h6">Formulário Exam-pass</Typography>
            <Box component={"form"} sx={{ width: '100%' }} onSubmit={handleSubmit}>
                <TextField
                    value={escoreBrutoP1Etapa1}
                    onChange={(event) => setEscoreBrutoP1Etapa1(Number(event.target.value))}
                    label="Var 1"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={escoreBrutoP2Etapa1}
                    onChange={(event) => setEscoreBrutoP2Etapa1(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={escoreBrutoP1Etapa2}
                    onChange={(event) => setEscoreBrutoP1Etapa2(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={escoreBrutoP2Etapa2}
                    onChange={(event) => setEscoreBrutoP2Etapa2(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={escoreBrutoP1Etapa3}
                    onChange={(event) => setEscoreBrutoP1Etapa3(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={escoreBrutoP2Etapa3}
                    onChange={(event) => setEscoreBrutoP2Etapa3(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={pseudoArgumentoFinal}
                    onChange={(event) => setPseudoArgumentoFinal(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={minFlag}
                    onChange={(event) => setMinFlag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={medianFlag}
                    onChange={(event) => setMedianFlag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={cotasNegrosFlag}
                    onChange={(event) => setCotasNegrosFlag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas1Flag}
                    onChange={(event) => setPublicas1Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas2Flag}
                    onChange={(event) => setPublicas2Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas3Flag}
                    onChange={(event) => setPublicas3Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas4Flag}
                    onChange={(event) => setPublicas4Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas5Flag}
                    onChange={(event) => setPublicas5Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas6Flag}
                    onChange={(event) => setPublicas6Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas7Flag}
                    onChange={(event) => setPublicas7Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={publicas8Flag}
                    onChange={(event) => setPublicas8Flag(Number(event.target.value))}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <TextField
                    value={curso}
                    onChange={(event) => setCurso(event.target.value)}
                    label="Var 2"
                    variant="standard"
                    fullWidth
                    required />
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}