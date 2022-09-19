import { useState } from "react";
import ReactModal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
        <ReactModal isOpen={isNewTransactionModalOpen}>
          <h2>Cadastrar transação</h2>
        </ReactModal>
      </Content>
    </Container>
  );
}
