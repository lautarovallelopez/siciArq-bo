/* global window */
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {Button} from 'reactstrap';

import {
    Picture, DropArea, PictureContainer, CredentialPanel, Undo, Print
} from './styled';

const UploadPicture = () => {
    const [file, setFile] = useState({});

    const {
        getRootProps, getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: (acceptedFiles, fileRejections) => {
            const acceptedFile = acceptedFiles[0];
            if (fileRejections && fileRejections.length) {
                setFile({
                    ...acceptedFile,
                    rejected: true
                });
            }
            if (!fileRejections?.length) {
                setFile({
                    ...acceptedFile,
                    preview: URL.createObjectURL(acceptedFile)
                });
            }
        }
    });

    useEffect(() => {
        URL.revokeObjectURL(file.preview);
    }, [file]);

    const handleReset = () => {
        setFile({});
    };

    return (
        <>
            {(file.preview || file.rejected) && (
                <CredentialPanel className="d-print-none">
                    <Undo>
                        <Button onClick={() => handleReset()}>Limpiar</Button>
                    </Undo>
                    {!file.rejected && (
                        <Print>
                            <Button onClick={() => window.print()}>Imprimir</Button>
                        </Print>
                    )}
                </CredentialPanel>
            )}
            <PictureContainer>
                {!file.preview && (
                    <DropArea {...getRootProps({className: 'dropzone'})} data-testid="drop-area">
                        <input {...getInputProps()}/>
                        <p>Arrastre su foto , o haga click para buscarla</p>
                        {file.rejected && <p>Sólo imágenes jpeg o png</p>}
                    </DropArea>
                )}
                {file.preview && <Picture src={file.preview} data-testid="picture"/>}
            </PictureContainer>
        </>
    );
};

export default UploadPicture;
