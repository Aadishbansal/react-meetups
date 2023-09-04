import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const NewMeetupForm = (props) => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    handleValueChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    reset: resetTitleInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressInputHasError,
    handleValueChange: handleAddressChange,
    handleInputBlur: handleAddressBlur,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionInputHasError,
    handleValueChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    reset: resetDescriptionInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredImageUrl,
    isValid: imageUrlIsValid,
    hasError: imageUrlHasError,
    handleValueChange: handleImageUrlChange,
    handleInputBlur: handleImageUrlBlur,
    reset: resetImageUrlInput,
  } = useInput(isNotEmpty);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !(titleIsValid && addressIsValid && descriptionIsValid && imageUrlIsValid)
    ) {
      alert("Invalid Data");

      return;
    }
    const meetupData = {
      title: enteredTitle,
      imageUrl: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);

    resetTitleInput();
    resetAddressInput();
    resetDescriptionInput();
    resetImageUrlInput();
  };

  return (
    <div className="container">
      <div className="row justify-content-center needs-validation">
        <form
          className=" col-12 col-lg-6 mt-3"
          onSubmit={formSubmissionHandler}
        >
          <div className="mb-3">
            <label htmlFor="meetup-title" className="form-label">
              Meetup Title
            </label>
            <input
              type="text"
              className={`form-control ${titleInputHasError && "is-invalid"}`}
              id="meetup-title"
              value={enteredTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              placeholder="Enter title here"
            />
            <div className="invalid-feedback">Meetup title required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="image-url" className="form-label">
              Image url
            </label>
            <input
              type="text"
              className={`form-control ${imageUrlHasError && "is-invalid"}`}
              id="image-url"
              placeholder="Enter image url here"
              value={enteredImageUrl}
              onChange={handleImageUrlChange}
              onBlur={handleImageUrlBlur}
            />
            <div className="invalid-feedback">Image url required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className={`form-control ${addressInputHasError && "is-invalid"}`}
              value={enteredAddress}
              onChange={handleAddressChange}
              onBlur={handleAddressBlur}
              placeholder="Enter address here"
            />
            <div className="invalid-feedback">Address required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className={`form-control ${
                descriptionInputHasError && "is-invalid"
              }`}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
              value={enteredDescription}
              id="description"
              rows={5}
              placeholder="Enter description here"
            ></textarea>
            <div className="invalid-feedback">Description required</div>
          </div>

          <div className=" d-flex justify-content-end">
            <button className="btn btn-primary">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewMeetupForm;
