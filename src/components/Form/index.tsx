import { Box, Typography, TextField, Button, FormControl, InputLabel, NativeSelect } from '@mui/material'
import { useRef, useState, InputHTMLAttributes } from 'react'
import { useMutation } from '@tanstack/react-query'
import { IForm } from '../../interfaces/IForm'
import http from '../../http'
import ResultModal from '../ResultModal'
import courses from '../../data/courses.json'
import { ICourse } from '../../interfaces/ICourse'

export default function Form() {

    const escoreBrutoP1Etapa1 = useRef<InputHTMLAttributes<number>>();
    const escoreBrutoP2Etapa1 = useRef<InputHTMLAttributes<number>>();
    const escoreBrutoP1Etapa2 = useRef<InputHTMLAttributes<number>>();
    const escoreBrutoP2Etapa2 = useRef<InputHTMLAttributes<number>>();
    const escoreBrutoP1Etapa3 = useRef<InputHTMLAttributes<number>>();
    const escoreBrutoP2Etapa3 = useRef<InputHTMLAttributes<number>>();

    const cotasNegrosFlag = useRef<InputHTMLAttributes<number>>();
    const publicas1Flag = useRef<InputHTMLAttributes<number>>();
    const publicas2Flag = useRef<InputHTMLAttributes<number>>();
    const publicas3Flag = useRef<InputHTMLAttributes<number>>();
    const publicas4Flag = useRef<InputHTMLAttributes<number>>();
    const publicas5Flag = useRef<InputHTMLAttributes<number>>();
    const publicas6Flag = useRef<InputHTMLAttributes<number>>();
    const publicas7Flag = useRef<InputHTMLAttributes<number>>();
    const publicas8Flag = useRef<InputHTMLAttributes<number>>();

    const curso = useRef<InputHTMLAttributes<string>>();

    const [proba, setProba] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form: IForm = {
            escore_bruto_p1_etapa1: escoreBrutoP1Etapa1.current?.value ? Number(escoreBrutoP1Etapa1.current?.value) : null,
            escore_bruto_p2_etapa1: escoreBrutoP2Etapa1.current?.value ? Number(escoreBrutoP2Etapa1.current?.value) : null,
            escore_bruto_p1_etapa2: escoreBrutoP1Etapa2.current?.value ? Number(escoreBrutoP1Etapa2.current?.value) : null,
            escore_bruto_p2_etapa2: escoreBrutoP2Etapa2.current?.value ? Number(escoreBrutoP2Etapa2.current?.value) : null,
            escore_bruto_p1_etapa3: escoreBrutoP1Etapa3.current?.value ? Number(escoreBrutoP1Etapa3.current?.value) : null,
            escore_bruto_p2_etapa3: escoreBrutoP2Etapa3.current?.value ? Number(escoreBrutoP2Etapa3.current?.value) : null,
            cotas_negros_flag: cotasNegrosFlag.current?.value ? Number(cotasNegrosFlag.current?.value) : null,
            publicas1_flag: publicas1Flag.current?.value ? Number(publicas1Flag.current?.value) : null,
            publicas2_flag: publicas2Flag.current?.value ? Number(publicas2Flag.current?.value) : null,
            publicas3_flag: publicas3Flag.current?.value ? Number(publicas3Flag.current?.value) : null,
            publicas4_flag: publicas4Flag.current?.value ? Number(publicas4Flag.current?.value) : null,
            publicas5_flag: publicas5Flag.current?.value ? Number(publicas5Flag.current?.value) : null,
            publicas6_flag: publicas6Flag.current?.value ? Number(publicas6Flag.current?.value) : null,
            publicas7_flag: publicas7Flag.current?.value ? Number(publicas7Flag.current?.value) : null,
            publicas8_flag: publicas8Flag.current?.value ? Number(publicas8Flag.current?.value) : null,
            course: curso.current?.value ? String(curso.current?.value) : null
        }

        mutation.mutate(form);

        setOpenModal(true);

        console.log(form);

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
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP1Etapa1}
                        label="Escore Bruto - Prova 1, etapa 1"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP2Etapa1}
                        label="Escore Bruto - Prova 2, etapa 1"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP1Etapa2}
                        label="Escore Bruto - Prova 1, etapa 2"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP2Etapa2}
                        label="Escore Bruto - Prova 2, etapa 2"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP1Etapa3}
                        label="Escore Bruto - Prova 1, etapa 3"
                        variant="standard"
                        fullWidth
                        required />
                    <TextField
                        type="number"
                        inputProps={{step: "any"}}
                        inputRef={escoreBrutoP2Etapa3}
                        label="Escore Bruto - Prova 2, etapa 3"
                        variant="standard"
                        fullWidth
                        required />
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Cota de negros
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            inputRef={cotasNegrosFlag}
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
                            inputRef={publicas1Flag}
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
                            inputRef={publicas2Flag}
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
                            inputRef={publicas3Flag}
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
                            inputRef={publicas4Flag}
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
                            inputRef={publicas5Flag}
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
                            inputRef={publicas6Flag}
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
                            inputRef={publicas7Flag}
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
                            inputRef={publicas8Flag}
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
                            inputRef={curso}
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