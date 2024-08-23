import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./NewSuggestionModal.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSuggestionContext } from "../../contexts/SuggestionContext";
import { useSuggestionListContext } from "../../contexts/SuggestionListContext";
import { UserSuggestion } from "../../types/suggestion.interfaces";
import { useNavigate } from "react-router-dom";
import { suggestionService } from "../../services/suggestion.service";

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
  const navigate = useNavigate();

  const { setSelectedSuggestion } = useSuggestionContext();

  const { addSuggestion } = useSuggestionListContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    if (isValid) {
      const newSuggestion: UserSuggestion =
        suggestionService.createNewSuggestion(data);

      addSuggestion(newSuggestion);
      setSelectedSuggestion(newSuggestion);
      navigate(`/${newSuggestion.title}`);
      reset();
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

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
            <Form.Group controlId="suggestionTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Something ingenious..."
                isInvalid={!!errors.suggestionTitle}
                {...register("suggestionTitle")}
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                {errors.suggestionTitle?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="suggestionDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tell us more, we're all ears..."
                isInvalid={!!errors.suggestionDescription}
                {...register("suggestionDescription")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.suggestionDescription?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="modal-buttons d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className="submit-btn"
                type="submit"
                onKeyDown={handleKeyDown}
              >
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
