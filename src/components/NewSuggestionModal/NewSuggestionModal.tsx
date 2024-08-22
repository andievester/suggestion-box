import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./NewSuggestionModal.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  suggestionTitle: z
    .string()
    .min(1, { message: "Suggestion title is required." }),
  suggestionDescription: z.string().min(1, {
    message:
      "Please add an elucidative description for your ingenious suggestion.",
  }),
});

type FormData = z.infer<typeof schema>;

const NewSuggestionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="new-suggestion-button" onClick={handleShow}>
        <i className="bi bi-pencil-square"></i>{" "}
        <span className="ml-2">New Suggestion</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Suggest Something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="suggestionTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Something ingenious..."
                {...register("suggestionTitle")}
                isInvalid={!!errors.suggestionTitle}
              />
              <Form.Control.Feedback type="invalid">
                {errors.suggestionTitle?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="suggestionDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                {...register("suggestionDescription")}
                isInvalid={!!errors.suggestionDescription}
              />
              <Form.Control.Feedback type="invalid">
                {errors.suggestionDescription?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="modal-buttons d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewSuggestionModal;
