import { DEFAULT_AVATAR, DEFAULT_IMG } from '../common/constants'
import { StudentItemDataType } from '../features/my-course-detail/components/StudentList'
import { LearningItemDataType } from '../features/my-learning/components/MyLearningList'
import { CourseStatus, Enrolment } from '../graphql/generated/graphql'

export const convertEnrolmentsToLearningItems = (enrolments: Enrolment[]) => {
  return enrolments.map<LearningItemDataType>((item) => ({
    key: item.id,
    name: item.course.name,
    courseId: item.course.id,
    thumbnail: item.course.thumbnail || DEFAULT_IMG,
    status: item.isFinished ? CourseStatus.Ended : item.course.status,
    fee: item.course.fee,
    tutorId: item.course.userId,
    tutorName: item.course.user.fullName,
    startDate: item.course.startDate,
    endDate: item.course.endDate,
  }))
}

export const convertEnrolmentsToStudentItems = (enrolments: Enrolment[]) => {
  return enrolments.map<StudentItemDataType>((item) => ({
    key: item.id,
    avatar: item.user?.avatar || DEFAULT_AVATAR,
    userId: item.userId,
    fullName: item.user?.fullName,
    gender: item.user.gender,
    birthday: item.user?.birthday,
    isFinished: item.isFinished,
    createdAt: item.createdAt,
  }))
}
