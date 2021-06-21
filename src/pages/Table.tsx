import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'
import baseURL from '../config/api'
import IState from '../interfaces/IState'
import List from './List'

const Table: React.FunctionComponent<{}> = (props) => {
  const [list, setList] = useState<IState['people']>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize] = useState(5)
  const [input, setInput] = useState({
    name: '',
    email: '',
    position: '',
  })

  useEffect(() => {
    async function onFetch() {
      try {
        const res = await baseURL.get(
          `/employees?page=${pageNumber}&limit=${pageSize}&sortBy=createdAt&order=desc`
        )
        setList(res.data)
      } catch {
        console.log('inside catch')
      }
    }
    onFetch()
  }, [pageNumber, pageSize])

  const onGetData = async (pageNumber: number) => {
    const res = await baseURL.get(
      `/employees?page=${pageNumber}&limit=${pageSize}&sortBy=createdAt&order=desc`
    )
    setList(res.data)
  }

  const handlePrevious = () => {
    if (pageNumber > 1) {
      const currenPage = pageNumber - 1
      setPageNumber(currenPage)
      onGetData(currenPage)
    }
  }

  const handleNext = async () => {
    const currenPage = pageNumber + 1
    setPageNumber(currenPage)
    onGetData(currenPage)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onAddEmployee = async (body: {}) => {
    await baseURL.post(`/employees`, body)
    setPageNumber(1)
    await onGetData(1)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!input.name || !input.email || !input.position) {
      return
    }

    const { name, email, position } = input
    const item = { name, email, position, createdAt: new Date().getTime() }

    await onAddEmployee(item)

    setInput({
      name: '',
      email: '',
      position: '',
    })
  }

  return (
    <Container className="text-center table-employees">
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          onChange={handleChange}
          className="form-input"
          name="name"
          value={input.name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleChange}
          className="form-input"
          name="email"
          value={input.email}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={handleChange}
          className="form-input"
          name="position"
          value={input.position}
          placeholder="Your Position"
        />
        <Button color="primary" type="submit">
          Add to List
        </Button>
      </form>
      <div>
        <Button
          disabled={pageNumber < 2}
          className="custom-button"
          color="primary"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button className="custom-button" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
      <List people={list} />
    </Container>
  )
}

export default Table
