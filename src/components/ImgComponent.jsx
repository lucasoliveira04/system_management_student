/**
 * Componente de imagem reutilizável.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.src - O caminho da imagem.
 * @param {number|string} props.width - A largura da imagem.
 * @param {number|string} props.height - A altura da imagem.
 * @param {string} props.classname - A classe CSS da imagem.
 * @param {string} props.alt - O texto alternativo da imagem.
 * @returns {JSX.Element} O componente de imagem.
 */
export const ImgComponent = ({
                                 src,
                                 width,
                                 height,
                                 classname,
                                 alt
                             }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classname}
        />
    );
};

export default ImgComponent;
