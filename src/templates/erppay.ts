

export function edoCta(account: string, owner: string, debt: number): string {
    return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>PDF Example</title>
                <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 14px;
                    line-height: 1.5;
                }
                .image-container {
                    text-align: center;
                    margin: 20px 0;
                }
                .image-container img {
                    max-width: 100%;
                    height: auto;
                }
                </style>
            </head>
            <body>
                <h1>Cuenta: ${account}</h1>
                <p>Propietario: ${owner} con una deuda de ${debt}</p>
                <div class="image-container">
                <img src="https://pbs.twimg.com/media/Dv2MtRqU8AAQSdI.jpg:large" alt="Ejemplo de Imagen">
                </div>
                <p>Otro párrafo de ejemplo. Puedes incluir imágenes, títulos y cualquier contenido HTML en el PDF.</p>
            </body>
            </html>
        `
}
