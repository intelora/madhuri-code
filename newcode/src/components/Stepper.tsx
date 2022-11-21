import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

import Avatar from '@mui/material/Avatar'
import React from 'react'

const steps = [
    {
        label: 'Connect Wallet',
        description: `Checking connection...`,
    },
    {
        label: 'Send Transaction',
        description: 'Please send the transaction to mint your NFT',
    },
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#131313',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
}

export default function VerticalLinearStepper({
    open,
    onClose: handleClose,
    activeStep,
    setActiveStep,
    error,
}: {
    open: boolean
    onClose: () => void
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    error: string
}) {
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Stepper
                    activeStep={activeStep}
                    // error
                    orientation='vertical'
                    sx={{ color: '#1976D2' }}
                >
                    {steps.map((step, index) => (
                        <Step key={step.label} sx={{ color: '#1976D2' }}>
                            <StepLabel
                                error={
                                    error && index === activeStep ? true : false
                                }
                                sx={{ color: '#1976D2' }}
                                icon={
                                    !error &&
                                    index >= activeStep && (
                                        <Avatar
                                            alt='Remy Sharp'
                                            src='/static/images/avatar/1.jpg'
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                color: '#000',
                                                backgroundColor: '#1976D2',
                                            }}
                                        >
                                            {index + 1}
                                        </Avatar>
                                    )
                                }
                                // optional={
                                //     error && index === activeStep ? (
                                //         <Typography
                                //             variant='caption'
                                //             sx={{ color: '#1976D2' }}
                                //         >
                                //             Last step
                                //         </Typography>
                                //     ) : null
                                // }
                            >
                                <Typography
                                    color={
                                        error && index === activeStep
                                            ? 'error'
                                            : ''
                                    }
                                >
                                    {error && index === activeStep
                                        ? 'Error'
                                        : step.label}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                {!error ? (
                                    <>
                                        <Typography sx={{ color: '#fff' }}>
                                            {step.description}
                                        </Typography>
                                        <CircularProgress
                                            sx={{ marginTop: '1rem' }}
                                        />
                                    </>
                                ) : (
                                    <Typography
                                        color={
                                            error && index === activeStep
                                                ? 'error'
                                                : 'primary'
                                        }
                                    >
                                        {' '}
                                        {typeof error === 'string'
                                            ? error
                                            : 'Something went wrong, please check your wallet and try again.'}{' '}
                                    </Typography>
                                )}
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        {/* <Button
                                            variant='contained'
                                            onClick={handleNext}
                                            sx={{
                                                mt: 1,
                                                mr: 1,
                                                backgroundColor:
                                                    '#ffb400 !important',
                                                color: '#000',
                                            }}
                                        >
                                            {index === steps.length - 1
                                                ? 'Finish'
                                                : 'Continue'}
                                        </Button> */}
                                        {/* <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{
                                                mt: 1,
                                                mr: 1,
                                                backgroundColor:
                                                    '#1976D2 !important',
                                                color: '#fff',
                                            }}
                                        >
                                            Back
                                        </Button> */}
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            p: 3,
                            backgroundColor: '#171717',
                            borderRadius: '12px',
                        }}
                    >
                        <Typography variant='body1' sx={{ color: '#ddd' }}>
                            NFT was minted successfully!
                        </Typography>
                        <Button
                            onClick={handleClose}
                            sx={{
                                mt: 1,
                                mr: 1,
                                backgroundColor: '#ffb400 !important',
                                color: '#000',
                                width: '100%',
                            }}
                        >
                            Close
                        </Button>
                    </Paper>
                )}
            </Box>
        </Modal>
    )
}
