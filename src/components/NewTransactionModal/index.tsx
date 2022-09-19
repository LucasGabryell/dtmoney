import ReactModal from "react-modal";
import { Container } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título"></input>
        <input placeholder="Valor" type="number"></input>
        <input placeholder="Categoria"></input>

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
