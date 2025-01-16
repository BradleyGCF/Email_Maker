import Container from '@/modules/core/ui/viewContainer'
import { useRef } from 'react'
import EmailEditor, { type EditorRef } from 'react-email-editor'
// import type { EmailEditorProps } from '@/types';
// import styles from './EmailEditor.module.css';

//React.FC<EmailEditorProps>
//  = (
// { initialHtml, onExport }
// )
const EmailEditorComponent = () => {
  const emailEditorRef = useRef<EditorRef>(null)

  // Cargar HTML inicial (si existe)
  // React.useEffect(() => {
  //     if (initialHtml) {
  //         const unlayer = emailEditorRef.current?.editor;
  //         unlayer?.loadDesign(JSON.parse(initialHtml));
  //     }
  // }, [initialHtml]);

  // Exportar HTML generado
  const handleExportHtml = () => {
    const unlayer = emailEditorRef.current?.editor

    console.log(unlayer)

    // Sacar JSON del diseño
    const editorState = unlayer?.saveDesign?.(() => {
      console.log('Estado interno del editor (JSON):', editorState)
    })

    console.log('Estado interno:', editorState)

    // unlayer?.exportHtml((data) => {
    //     const { html } = data;
    //     onExport(html);
    // });
  }

  return (
    <Container className="p-0">
      <div className="overflow-hidden relative h-[450px]">
        <div className="absolute top-0 right-0">
          <EmailEditor ref={emailEditorRef} />
        </div>
      </div>
      <button
        // className={styles.exportButton}
        type="button"
        onClick={handleExportHtml}
      >
        Exportar HTML
      </button>
    </Container>
  )
}

export default EmailEditorComponent
