import style from './Assessment.module.css'

const AssessmentItem = ({ user, photo, rating, comment }) => {
    return (
      <div className={style.AssessmentItem}> 
        <img src={photo} alt={`${user}'s avatar`} className={style.Photo} /> 
        <div className={style.Details}> 
          <h4>{user}</h4>
          <p>Nota: {rating}/10</p>
          <p>{comment}</p>
        </div>
      </div>
    );
};
  

export default function Assessment (assessments) {
    if (!Array.isArray(assessments.props)) {
        return <p>Nenhuma avaliação disponível</p>;
    }
    const assessmentsList = assessments.props;
    return (
        <div className="assessmentContainer">
            {assessmentsList.map((assessment, index) => (
                <AssessmentItem
                key={index}
                user={assessment.user}
                photo={assessment.photo}
                rating={assessment.rating}
                comment={assessment.comment}
                />
            ))}
        </div>
    );
}
