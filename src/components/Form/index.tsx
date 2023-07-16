import { Box, Typography, TextField, Button, FormControl, InputLabel, NativeSelect } from '@mui/material'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { IForm } from '../../interfaces/IForm'
import http from '../../http'
import ResultModal from '../ResultModal'
import courses from '../../data/courses.json'
import { ICourse } from '../../interfaces/ICourse'

export default function Form() {

    const [escoreBrutoP1Etapa1, setEscoreBrutoP1Etapa1] = useState<number>(0);
    const [escoreBrutoP2Etapa1, setEscoreBrutoP2Etapa1] = useState<number>(0);
    const [escoreBrutoP1Etapa2, setEscoreBrutoP1Etapa2] = useState<number>(0);
    const [escoreBrutoP2Etapa2, setEscoreBrutoP2Etapa2] = useState<number>(0);
    const [escoreBrutoP1Etapa3, setEscoreBrutoP1Etapa3] = useState<number>(0);
    const [escoreBrutoP2Etapa3, setEscoreBrutoP2Etapa3] = useState<number>(0);
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

    const [proba, setProba] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form: IForm = {
            escore_bruto_p1_etapa1: escoreBrutoP1Etapa1,
            escore_bruto_p2_etapa1: escoreBrutoP2Etapa1,
            escore_bruto_p1_etapa2: escoreBrutoP1Etapa2,
            escore_bruto_p2_etapa2: escoreBrutoP2Etapa2,
            escore_bruto_p1_etapa3: escoreBrutoP1Etapa3,
            escore_bruto_p2_etapa3: escoreBrutoP2Etapa3,
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
        // setProba(mutation.data?.data?.prediction?.probability);

        setOpenModal(true);

    }

    const mutation = useMutation((newForm: IForm) => {
        return http.post('predict', newForm)
    }, {
        onSuccess: (response) => {
            setProba(response.data.prediction.probability)
        }
    })

    return (
        <>
            <ResultModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                result={proba}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                <Typography component={"h1"} variant="h6">Formulário Exam-pass</Typography>
                <Box component={"form"} sx={{ width: '100%' }} onSubmit={handleSubmit}>
                    <TextField
                        onChange={(event) => setEscoreBrutoP1Etapa1(Number(event.target.value))}
                        label="Escore Bruto - Prova 1, etapa 1"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        onChange={(event) => setEscoreBrutoP2Etapa1(Number(event.target.value))}
                        label="Escore Bruto - Prova 2, etapa 1"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        onChange={(event) => setEscoreBrutoP1Etapa2(Number(event.target.value))}
                        label="Escore Bruto - Prova 1, etapa 2"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        onChange={(event) => setEscoreBrutoP2Etapa2(Number(event.target.value))}
                        label="Escore Bruto - Prova 2, etapa 2"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        onChange={(event) => setEscoreBrutoP1Etapa3(Number(event.target.value))}
                        label="Escore Bruto - Prova 3, etapa 1"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        onChange={(event) => setEscoreBrutoP2Etapa3(Number(event.target.value))}
                        label="Escore Bruto - Prova 3, etapa 2"
                        variant="standard"
                        fullWidth
                        required />
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Cota de negros
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setCotasNegrosFlag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 1
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas1Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl> 
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 2
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas2Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 3
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas3Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 4
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas4Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 5
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas5Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 6
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas6Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 7
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas7Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Públicas 8
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            onChange={(event) => setPublicas8Flag(Number(event.target.value))}
                        >
                            <option value={0}>Não</option>
                            <option value={1}>Sim</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Curso
                        </InputLabel>
                        <NativeSelect
                            onChange={(event) => setCurso(event.target.value)}
                        >
                            {courses.courses.map((course: ICourse) => (
                                <option value={course.name}>{course.name}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                    <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
                </Box>
            </Box>
        </>
    )
}