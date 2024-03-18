/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Password custom scalar type */
  Password: { input: any; output: any; }
};

export type AddressInput = {
  city: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type AddressType = {
  __typename?: 'AddressType';
  city: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type BankAccount = {
  __typename?: 'BankAccount';
  _id: Scalars['ID']['output'];
  accountHolder: Scalars['String']['output'];
  accountNo: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  routingNo: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type BankCard = {
  __typename?: 'BankCard';
  brand: Scalars['String']['output'];
  last4: Scalars['String']['output'];
};

export type CachePurgeInput = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  types: Array<Scalars['String']['input']>;
};

export enum CameraPermission {
  FliiksCamera = 'FLIIKS_CAMERA',
  NativeCamera = 'NATIVE_CAMERA'
}

export type CreateBankAccountInput = {
  accountHolder: Scalars['String']['input'];
  accountNo: Scalars['String']['input'];
  bankName: Scalars['String']['input'];
  routingNo: Scalars['String']['input'];
};

export type CreateImageInput = {
  blurHash: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  jobId?: InputMaybe<Scalars['ID']['input']>;
  key: Scalars['String']['input'];
  type: ImageType;
  userId?: InputMaybe<Scalars['ID']['input']>;
  width: Scalars['Int']['input'];
};

export type CreateJobCategoryInput = {
  description: Scalars['String']['input'];
  iconUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateJobInput = {
  address: Scalars['String']['input'];
  cameraPermission: CameraPermission;
  canViewBy?: InputMaybe<Array<Scalars['ID']['input']>>;
  categoryId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  location: LocationInput;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  scheduledAt: Scalars['DateTime']['input'];
};

export type CreateJobPackageInput = {
  /** The amount in dollars */
  amount: Scalars['Int']['input'];
  /** The period in minutes */
  period: Scalars['Int']['input'];
};

export type CreateReportInput = {
  description: Scalars['String']['input'];
  jobId: Scalars['ID']['input'];
  reportTo: Scalars['ID']['input'];
  reportType: ReportType;
};

export type CreateReviewInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  reviewFor: Scalars['ID']['input'];
};

export type CreateSupportInput = {
  comment: Scalars['String']['input'];
  issueType: IssueTypeEnum;
  jobId: Scalars['ID']['input'];
};

export type DeviceToken = {
  __typename?: 'DeviceToken';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceToken?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<DeviceType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum DeviceType {
  Mobile = 'MOBILE',
  NotProvided = 'NOT_PROVIDED',
  Web = 'WEB'
}

export enum EventType {
  AcceptJob = 'ACCEPT_JOB',
  AwardedJob = 'AWARDED_JOB',
  BeginJob = 'BEGIN_JOB',
  CancelAwardedJob = 'CANCEL_AWARDED_JOB',
  CancelJob = 'CANCEL_JOB',
  DeclinedJobAcceptRequest = 'DECLINED_JOB_ACCEPT_REQUEST',
  ExpireJob = 'EXPIRE_JOB',
  FinishJob = 'FINISH_JOB',
  JobPaymentReceived = 'JOB_PAYMENT_RECEIVED',
  PrivateJobCreated = 'PRIVATE_JOB_CREATED',
  Reporting = 'REPORTING',
  SendReviewRequest = 'SEND_REVIEW_REQUEST',
  StartJob = 'START_JOB',
  StopJob = 'STOP_JOB',
  SupportTicketCreated = 'SUPPORT_TICKET_CREATED',
  SupportTicketStatus = 'SUPPORT_TICKET_STATUS'
}

export type GetMyJobCountType = {
  __typename?: 'GetMyJobCountType';
  activeJobCount: Scalars['Int']['output'];
  completedJobCount: Scalars['Int']['output'];
};

export type Image = {
  __typename?: 'Image';
  _id: Scalars['ID']['output'];
  blurHash: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  height: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  jobId?: Maybe<Scalars['ID']['output']>;
  key: Scalars['String']['output'];
  type: ImageType;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
  width: Scalars['Int']['output'];
};


export type ImageImageUrlArgs = {
  formats?: InputMaybe<Scalars['JSON']['input']>;
};

export enum ImageType {
  JobPhoto = 'JOB_PHOTO',
  Portfolio = 'PORTFOLIO',
  Profile = 'PROFILE'
}

export type InviteUserInput = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export enum IssueTypeEnum {
  AccountAndProfile = 'ACCOUNT_AND_PROFILE',
  CustomerReview = 'CUSTOMER_REVIEW',
  GeneralInquiry = 'GENERAL_INQUIRY',
  GpsLocation = 'GPS_LOCATION',
  JobRequest = 'JOB_REQUEST',
  Other = 'OTHER',
  PaymentAndTransaction = 'PAYMENT_AND_TRANSACTION'
}

export type Job = {
  __typename?: 'Job';
  _id: Scalars['ID']['output'];
  address: Scalars['String']['output'];
  albumName?: Maybe<Scalars['String']['output']>;
  awardToUser?: Maybe<User>;
  cameraPermission: CameraPermission;
  canViewBy?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  category: JobCategory;
  categoryId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  createdByUser?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  location: Location;
  package?: Maybe<JobPackage>;
  packageId?: Maybe<Scalars['ID']['output']>;
  paymentStatus?: Maybe<JobPaymentStatus>;
  photoCount?: Maybe<Scalars['Int']['output']>;
  photos: Array<Maybe<Image>>;
  progress: JobProgress;
  publicId: Scalars['String']['output'];
  reviewStatus?: Maybe<ReviewStatus>;
  scheduledAt: Scalars['DateTime']['output'];
  startAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  /** The totalAmount in dollars */
  totalAmount: Scalars['Int']['output'];
  /** The totalDuration in minutes */
  totalDuration: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type JobPhotoCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type JobPhotosArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type JobProgressArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type JobTotalAmountArgs = {
  mode?: InputMaybe<JobPaymentSplit>;
};

export type JobCategory = {
  __typename?: 'JobCategory';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  iconUrl: Scalars['String']['output'];
  status?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type JobCategoryIconUrlArgs = {
  formats?: InputMaybe<Scalars['JSON']['input']>;
};

export enum JobMode {
  Active = 'ACTIVE',
  Completed = 'COMPLETED'
}

export type JobPackage = {
  __typename?: 'JobPackage';
  _id: Scalars['ID']['output'];
  /** The amount in dollars */
  amount: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The period in minutes */
  period: Scalars['Int']['output'];
  status?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum JobPaymentSplit {
  Earning = 'EARNING',
  Fee = 'FEE',
  Taxes = 'TAXES'
}

export enum JobPaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  WaitingForCapture = 'WAITING_FOR_CAPTURE'
}

export enum JobProgress {
  Awarded = 'AWARDED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  EnRoute = 'EN_ROUTE',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  Pending = 'PENDING',
  Private = 'PRIVATE'
}

export type Location = {
  __typename?: 'Location';
  /** The first index is long and second one lat */
  coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  type?: Maybe<LocationInputEnum>;
};

export type LocationInput = {
  /** The first index is long and second one lat */
  coordinates: Array<Scalars['Float']['input']>;
  type: LocationInputEnum;
};

export enum LocationInputEnum {
  Point = 'Point'
}

export type Login = {
  __typename?: 'Login';
  accessToken: Scalars['String']['output'];
  firebaseToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['Password']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptJob: ResponsePayload;
  awardJob: ResponsePayload;
  beginJob: ResponsePayload;
  cancelAwardJob: ResponsePayload;
  cardSetupIntent: SetupIntent;
  changePassword: ResponsePayload;
  createBankAccount: BankAccount;
  createImage: Image;
  createJob: Job;
  createJobCategory: JobCategory;
  createJobPackage: JobPackage;
  createReport: Report;
  createReview: Review;
  createSupportTicket: Support;
  declineAcceptJob: ResponsePayload;
  deleteAccount: User;
  deleteBankAccount: BankAccount;
  deleteImages: Array<Image>;
  deleteJobByCreator: Job;
  deleteUser: User;
  finishJob: ResponsePayload;
  forgetPassword: ResponsePayload;
  generateAccessToken: TokenRes;
  generateFirebaseToken: TokenRes;
  generateOtp: ResponsePayload;
  inviteUser: User;
  jobPaymentIntent: PaymentIntent;
  login: Login;
  logout: ResponsePayload;
  makeJobPayment: Array<Job>;
  pushToImageProcessQueue: ResponsePayload;
  readAllMyNotifications: Scalars['Boolean']['output'];
  requestDeleteAccount: ResponsePayload;
  resetPassword: ResponsePayload;
  sendNotificationMany: Array<Notification>;
  sendReviewRequest: Job;
  startJob: ResponsePayload;
  stopJob: ResponsePayload;
  updateAlbumName: Job;
  updateBankAccount: BankAccount;
  updateDeviceToken: DeviceToken;
  updateJob: Job;
  updateJobByAdmin: Job;
  updateJobCategory: JobCategory;
  updateJobPackage: JobPackage;
  updateSupportTicketStatus: Support;
  updateUser: User;
  verifyOtp: Login;
  viewAccount: User;
};


export type MutationAcceptJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationAwardJobArgs = {
  awardTo: Scalars['ID']['input'];
  jobId: Scalars['ID']['input'];
};


export type MutationBeginJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationCancelAwardJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['Password']['input'];
  oldPassword: Scalars['Password']['input'];
};


export type MutationCreateBankAccountArgs = {
  data: CreateBankAccountInput;
};


export type MutationCreateImageArgs = {
  data: CreateImageInput;
};


export type MutationCreateJobArgs = {
  data: CreateJobInput;
};


export type MutationCreateJobCategoryArgs = {
  data: CreateJobCategoryInput;
};


export type MutationCreateJobPackageArgs = {
  data: CreateJobPackageInput;
};


export type MutationCreateReportArgs = {
  data: CreateReportInput;
};


export type MutationCreateReviewArgs = {
  data: CreateReviewInput;
  jobId: Scalars['ID']['input'];
};


export type MutationCreateSupportTicketArgs = {
  data: CreateSupportInput;
};


export type MutationDeclineAcceptJobArgs = {
  jobId: Scalars['ID']['input'];
  photographerId: Scalars['ID']['input'];
};


export type MutationDeleteAccountArgs = {
  deleteTicket: Scalars['String']['input'];
};


export type MutationDeleteBankAccountArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteImagesArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeleteJobByCreatorArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationFinishJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationForgetPasswordArgs = {
  email: Scalars['EmailAddress']['input'];
};


export type MutationGenerateAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationGenerateOtpArgs = {
  countryCode: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
};


export type MutationInviteUserArgs = {
  data: InviteUserInput;
};


export type MutationJobPaymentIntentArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationMakeJobPaymentArgs = {
  isPaid: Scalars['Boolean']['input'];
  jobIds: Array<Scalars['ID']['input']>;
};


export type MutationPushToImageProcessQueueArgs = {
  key: Scalars['String']['input'];
  type: ImageType;
};


export type MutationRequestDeleteAccountArgs = {
  email: Scalars['EmailAddress']['input'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['Password']['input'];
  resetTicket: Scalars['String']['input'];
  type: ResetPasswordType;
};


export type MutationSendNotificationManyArgs = {
  datas: Array<SendNotificationInput>;
};


export type MutationSendReviewRequestArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationStartJobArgs = {
  jobId: Scalars['ID']['input'];
  location: LocationInput;
};


export type MutationStopJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationUpdateAlbumNameArgs = {
  albumName: Scalars['String']['input'];
  jobId: Scalars['ID']['input'];
};


export type MutationUpdateBankAccountArgs = {
  data: UpdateBankAccountInput;
};


export type MutationUpdateDeviceTokenArgs = {
  data: UpdateDeviceTokenInput;
};


export type MutationUpdateJobArgs = {
  data: UpdateJobInput;
};


export type MutationUpdateJobByAdminArgs = {
  data: UpdateJobAdminInput;
};


export type MutationUpdateJobCategoryArgs = {
  data: UpdateJobCategoryInput;
};


export type MutationUpdateJobPackageArgs = {
  data: UpdateJobPackageInput;
};


export type MutationUpdateSupportTicketStatusArgs = {
  _id: Scalars['ID']['input'];
  status: SupportStatusEnum;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationVerifyOtpArgs = {
  countryCode: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
};


export type MutationViewAccountArgs = {
  deleteTicket: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventData?: Maybe<Scalars['JSON']['output']>;
  eventType?: Maybe<EventType>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  sendFrom?: Maybe<Scalars['ID']['output']>;
  sendFromUser?: Maybe<User>;
  sendTo?: Maybe<Scalars['ID']['output']>;
  sendToUser?: Maybe<User>;
  status?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  clientSecret?: Maybe<Scalars['String']['output']>;
  ephemeralKey?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAcceptedPhotographers: Array<Maybe<User>>;
  getAcceptedPhotographersCount: Scalars['Int']['output'];
  getAllDeviceToken: Array<Maybe<DeviceToken>>;
  getAllDeviceTokenCount: Scalars['Int']['output'];
  getAllJob: Array<Job>;
  getAllJobCategory: Array<JobCategory>;
  getAllJobCount: Scalars['Int']['output'];
  getAllJobPackage: Array<JobPackage>;
  getAllNotifications: Array<Maybe<Notification>>;
  getAllNotificationsCount: Scalars['Int']['output'];
  getAllReports: Array<Report>;
  getAllReportsCount: Scalars['Int']['output'];
  getAllReviews: Array<Review>;
  getAllReviewsCount: Scalars['Int']['output'];
  getAllSupportTickets: Array<Support>;
  getAllSupportTicketsCount: Scalars['Int']['output'];
  getAllUser: Array<Maybe<User>>;
  getAllUserCount: Scalars['Int']['output'];
  getBankAccountsByUserId: Array<BankAccount>;
  getCardsByCusId: Array<BankCard>;
  getCurrentUser?: Maybe<User>;
  getImageById?: Maybe<Image>;
  getImageByIds: Array<Maybe<Image>>;
  getJobById: Job;
  getJobContracts: Array<Job>;
  getJobPhotoUploadChunk: Array<UploadChunk>;
  getJobRequests: Array<Job>;
  getMyBankAccounts: Array<BankAccount>;
  getMyJobCount: GetMyJobCountType;
  getMyJobs: Array<Job>;
  getMyNotifications: Array<Maybe<Notification>>;
  getMyNotificationsCount: Scalars['Int']['output'];
  getMyReports: Array<Report>;
  getMyReportsCount: Scalars['Int']['output'];
  getMyReviews: Array<Review>;
  getMyReviewsCount: Scalars['Int']['output'];
  getMySupportTickets: Array<Support>;
  getMySupportTicketsCount: Scalars['Int']['output'];
  getNotificationById?: Maybe<Notification>;
  getOneUser?: Maybe<User>;
  getPhotosByJobId: Array<Maybe<Image>>;
  getPortfolioUploadChunk: Array<UploadChunk>;
  getProfileUploadChunk: Array<UploadChunk>;
  getUserById?: Maybe<User>;
};


export type QueryGetAcceptedPhotographersArgs = {
  jobId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAcceptedPhotographersCountArgs = {
  jobId: Scalars['ID']['input'];
};


export type QueryGetAllDeviceTokenArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllDeviceTokenCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllJobArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<LocationInput>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllJobCategoryArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllJobCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<LocationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllJobPackageArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllNotificationsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllNotificationsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllReportsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllReportsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllReviewsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllReviewsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllSupportTicketsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllSupportTicketsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllUserArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllUserCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBankAccountsByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetCardsByCusIdArgs = {
  cusId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetImageByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetImageByIdsArgs = {
  _ids: Array<Scalars['ID']['input']>;
};


export type QueryGetJobByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetJobContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  mode: JobMode;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetJobPhotoUploadChunkArgs = {
  jobId: Scalars['ID']['input'];
  payload: Array<UploadChunkInput>;
};


export type QueryGetJobRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<LocationInput>;
  mode: RequestMode;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyJobsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  mode: JobMode;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyNotificationsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyNotificationsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyReportsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyReportsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyReviewsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMyReviewsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMySupportTicketsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetMySupportTicketsCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetNotificationByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetOneUserArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetPhotosByJobIdArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  jobId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetPortfolioUploadChunkArgs = {
  payload: Array<UploadChunkInput>;
};


export type QueryGetProfileUploadChunkArgs = {
  payload: Array<UploadChunkInput>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['ID']['input'];
};

export type Report = {
  __typename?: 'Report';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  jobId: Scalars['ID']['output'];
  reportFrom?: Maybe<Scalars['ID']['output']>;
  reportFromUser?: Maybe<User>;
  reportTo?: Maybe<Scalars['ID']['output']>;
  reportToUser?: Maybe<User>;
  reportType: ReportType;
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum ReportType {
  Caption = 'CAPTION',
  Fake = 'FAKE',
  Fraud = 'FRAUD',
  Harassment = 'HARASSMENT',
  Harmful = 'HARMFUL',
  Hateful = 'HATEFUL',
  SomethingElse = 'SOMETHING_ELSE',
  Violence = 'VIOLENCE'
}

export enum RequestMode {
  Accepted = 'ACCEPTED',
  New = 'NEW'
}

export enum ResetPasswordType {
  ForgetPassword = 'FORGET_PASSWORD',
  Invitation = 'INVITATION'
}

export type ResponsePayload = {
  __typename?: 'ResponsePayload';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['ID']['output']>;
  rating: Scalars['Int']['output'];
  reviewFor?: Maybe<Scalars['ID']['output']>;
  reviewForUser?: Maybe<User>;
  reviewFrom?: Maybe<Scalars['ID']['output']>;
  reviewFromUser?: Maybe<User>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ReviewStatus {
  Pending = 'PENDING',
  Requested = 'REQUESTED',
  Submitted = 'SUBMITTED'
}

export enum Roles {
  Customer = 'CUSTOMER',
  Photographer = 'PHOTOGRAPHER',
  SuperAdmin = 'SUPER_ADMIN'
}

export type SendNotificationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dynamicLinkPath: Scalars['String']['input'];
  eventData?: InputMaybe<Scalars['JSON']['input']>;
  eventType: EventType;
  image?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  sendFrom?: InputMaybe<Scalars['ID']['input']>;
  sendTo: Scalars['ID']['input'];
};

export type SetupIntent = {
  __typename?: 'SetupIntent';
  ephemeralKey?: Maybe<Scalars['String']['output']>;
  setupIntent?: Maybe<Scalars['String']['output']>;
};

export type Support = {
  __typename?: 'Support';
  _id: Scalars['ID']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  issueType: IssueTypeEnum;
  jobId: Scalars['ID']['output'];
  status: SupportStatusEnum;
  supportFor?: Maybe<Scalars['ID']['output']>;
  supportForUser?: Maybe<User>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum SupportStatusEnum {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW'
}

export type TokenRes = {
  __typename?: 'TokenRes';
  token?: Maybe<Scalars['String']['output']>;
};

export type UpdateBankAccountInput = {
  _id: Scalars['ID']['input'];
  accountHolder?: InputMaybe<Scalars['String']['input']>;
  accountNo?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  routingNo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeviceTokenInput = {
  deviceId: Scalars['String']['input'];
  deviceToken: Scalars['String']['input'];
  deviceType: DeviceType;
};

export type UpdateJobAdminInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cameraPermission?: InputMaybe<CameraPermission>;
  canViewBy?: InputMaybe<Array<Scalars['ID']['input']>>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  jobId: Scalars['ID']['input'];
  location?: InputMaybe<LocationInput>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  paymentStatus?: InputMaybe<JobPaymentStatus>;
};

export type UpdateJobCategoryInput = {
  _id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJobInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cameraPermission?: InputMaybe<CameraPermission>;
  canViewBy?: InputMaybe<Array<Scalars['ID']['input']>>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  jobId: Scalars['ID']['input'];
  location?: InputMaybe<LocationInput>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateJobPackageInput = {
  _id: Scalars['ID']['input'];
  amount?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserInput = {
  _id: Scalars['ID']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  addressPayload?: InputMaybe<AddressInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<Roles>>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadChunk = {
  __typename?: 'UploadChunk';
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UploadChunkInput = {
  contentType: Scalars['String']['input'];
  fileExtension: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressPayload?: Maybe<AddressType>;
  bio?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  createdByUser?: Maybe<User>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastLoggedIn?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  outstandingAmount?: Maybe<Scalars['Int']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  portfolios?: Maybe<Array<Maybe<Image>>>;
  profileImage?: Maybe<Image>;
  publicId?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Array<Maybe<Roles>>>;
  settledAmount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  totalEarnings?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserPortfoliosArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'ResponsePayload', message: string } };

export type GenerateOtpMutationVariables = Exact<{
  countryCode: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
}>;


export type GenerateOtpMutation = { __typename?: 'Mutation', generateOtp: { __typename?: 'ResponsePayload', status: number, message: string } };

export type VerifyOtpMutationVariables = Exact<{
  countryCode: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'Login', accessToken: string, refreshToken: string } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', _id: string, email?: any | null, firstName?: string | null, lastName?: string | null, phoneNo?: string | null } | null };


export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GenerateOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"countryCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<GenerateOtpMutation, GenerateOtpMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"countryCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNo"}}},{"kind":"Argument","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNo"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;