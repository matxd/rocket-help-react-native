import { useState } from 'react'
import { Alert } from 'react-native'
import { VStack } from 'native-base'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')

  function handleNewOrderRegister(){
    if(!patrimony || !description){
      Alert.alert('Registrar', 'Preencha todos os campos.')
    }
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />
      <Input placeholder="Número do patrimônio" mt={4} />
      <Input placeholder="Descrição do problema" mt={5} flex={1} multiline textAlignVertical="top" />
      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}