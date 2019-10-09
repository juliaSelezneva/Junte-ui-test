export enum FontIcons {
  plus = 'plus',
  minus = 'minus',
  close = 'close',
  check = 'check',
  burger = 'burger',
  add = 'add',
  cancel = 'cancel',
  spinner = 'spinner',
  reload = 'reload',
  actions = 'actions',
  arrowLeft = 'arrow-left',
  arrowRight = 'arrow-right',
  arrowFirst = 'arrow-first',
  arrowLast = 'arrow-last',
  chevronDoubleLeft = 'chevron-double-left',
  chevronDoubleRight = 'chevron-double-right',
  resize = 'resize',
  expand = 'expand',
  sortDown = 'sort-down',
  sorting = 'sorting',
  home = 'home',
  documentation = 'documentation',
  network = 'network',
  tree = 'tree',
  share = 'share',
  sync = 'sync',
  externalLink = 'external-link',
  unlink = 'unlink',
  download = 'download',
  cloudComputing = 'cloud-computing',
  save = 'save',
  delete = 'delete',
  edit = 'edit',
  file = 'file',
  copy = 'copy',
  scissors = 'scissors',
  mail = 'mail',
  printer = 'printer',
  picture = 'picture',
  photoCamera = 'photo-camera',
  user = 'user',
  addUser = 'add-user',
  delUser = 'del-user',
  team = 'team',
  addGroup = 'add-group',
  delGroup = 'del-group',
  contacts = 'contacts',
  profile = 'profile',
  view = 'view',
  search = 'search',
  dashboard = 'dashboard',
  star = 'star',
  power = 'power',
  settings = 'settings',
  warning = 'warning',
  information = 'information',
  query = 'query',
  stopping = 'stopping',
  project = 'project',
  money = 'money',
  facebook = 'facebook',
  google = 'google',
  vkLogo = 'vk-logo',
  instagram = 'instagram',
  like = 'like',
  dislike = 'dislike',
  chat = 'chat',
  tag = 'tag',
  bell = 'bell',
  filter = 'filter',
  map = 'map',
  earthGlobe = 'earth-globe',
  compass = 'compass',
  pin = 'pin',
  finish = 'finish',
  solar = 'solar',
  solarBlack = 'solar-black',
  moon = 'moon',
  accessLock = 'access-lock',
  accessUnlock = 'access-unlock',
  main = 'main',
  layout = 'layout',
  forms = 'forms',
  webProgramming = 'web-programming',
  elements = 'elements',
  graphic = 'graphic',
  time = 'time',
  calendar = 'calendar',
  grid = 'grid',
  creditCard = 'credit-card',
  qrCode = 'qr-code',
  playButton = 'play-button',
  pause = 'pause',
  stop = 'stop',
  run = 'run',
  send = 'send',
  half = 'half'
}

export enum SvgDefaultIcons {
  question = 'question',
  figma = 'figma',
  gitlab = 'gitlab',
  angular = 'angular',
  arnold = 'arnold',
  dribbble = 'dribbble'
}

export enum SvgFlagsIcons {
  russia = 'russia',
  germany = 'germany',
  usa = 'usa',
  france = 'france',
  unitedKingdom = 'united-kingdom',
  italy = 'italy',
  spain = 'spain',
  sweden = 'sweden'
}

export const SvgIcons = Object.assign({}, SvgDefaultIcons, SvgFlagsIcons);
export type SvgIcons = SvgDefaultIcons | SvgFlagsIcons;

export enum AnimatedIcons {
  runningMan = 'running-man',
  download = 'download',
  settings = 'settings',
  time = 'time',
  upload = 'upload',
}

export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  blue = '#E7F5FF',
  blue100 = '#E6E9FA',
  orange = '#EE8030',
  green = '#00CCB1',
  greenDark = '#00B89F',
  teal = '#1D2932',
  red = '#FF6262',
  redDark = '#DE5B5B',
  yellow = '#F8DB42',
  purple = '#3949AB',
  purpleDark = '#00227B',
  purpleLight = '#6F74DD',
  purpleLighten = '#C4C9E7',
  gray = '#C4C4C4',
  gray100 = '#F5F5F5',
  gray200 = '#F7F7F7',
  gray300 = '#F0F0F0',
  gray400 = '#E9E9E9',
  gray500 = '#F3F4FC',
  gray600 = '#C4C4C4',
  gray700 = '#D0D0D0',
  gray800 = '#828282',
  gray900 = '#4F4F4F',
  grayDark = '#343434'
}

export enum Schemes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  fail = 'fail'
}

export enum Themes {
  light = 'light',
  dark = 'dark'
}

export enum InputState {
  normal = 'normal',
  failed = 'failed',
  success = 'success'
}


export enum Sizes {
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum Paddings {
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  big = 'big',
  large = 'large',
  huge = 'huge'
}

export enum Outline {
  ghost = 'ghost',
  fill = 'fill',
  transparent = 'transparent'
}

export enum TypeButton {
  button = 'button',
  submit = 'submit'
}

export enum TypeIcon {
  font = 'font',
  svg = 'svg',
  animated = 'animated'
}

export enum TypeSkeleton {
  avatar = 'avatar',
  text = 'text'
}

export enum TypeBlock {
  simple = 'simple',
  bordered = 'bordered'
}

export enum FlexAlign {
  start = 'start',
  center = 'center',
  end = 'end',
  baseline = 'baseline',
  stretch = 'stretch'
}

export enum FlexJustify {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly'
}

export enum FlexDirection {
  row = 'row',
  column = 'column',
  rowReverse = 'row-reverse',
  columnReverse = 'column-reverse'
}

export enum FlexWrap {
  wrap = 'wrap',
  noWrap = 'nowrap',
  reverse = 'reverse'
}

export enum FlexAlignContent {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  stretch = 'stretch'
}

export enum FlexAlignSelf {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
  baseline = 'baseline',
  auto = 'auto'
}

export enum ValidationTypeError {
  required = 'required',
  minlength = 'minlength'
}

export enum PositionType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum StackGutter {
  tiny = 'tiny',
  small = 'small',
  normal = 'normal',
  big = 'big',
  large = 'large',
  huge = 'huge'
}

export enum FormLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  inline = 'inline'
}

export enum InputType {
  text = 'text',
  password = 'password'
}

export enum SelectMode {
  single = 'single',
  multiple = 'multiple'
}

export enum DropdownMode {
  click = 'click',
  hover = 'hover'
}

export enum Positions {
  rightTop = 'right-top',
  leftTop = 'left-top',
  inline = 'inline'
}

export enum PopoverPlacements {
  top = 'top',
  topLeft = 'top-left',
  topRight = 'top-right',
  right = 'right',
  rightTop = 'right-top',
  rightBottom = 'right-bottom',
  bottom = 'bottom',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  left = 'left',
  leftTop = 'left-top',
  leftBottom = 'left-bottom'
}

export enum TableFeatures {
  search = 'search'
}

export enum PopoverTriggers {
  hover = 'hover',
  click = 'click'
}

export enum Shapes {
  circle = 'circle',
  square = 'square'
}

export enum Width {
  fluid = 'fluid',
  default = 'default'
}

export enum Matching {
  fullMatch = 'fullMatch',
  wildcard = 'wildcard'
}

export enum GanttRequestStatuses {
  accepting = 'accepting',
  accepted = 'accepted',
  declined = 'declined'
}

export class UI {
  static icons = {
    font: FontIcons,
    svg: {
      default: SvgDefaultIcons,
      flags: SvgFlagsIcons,
    },
    animated: AnimatedIcons,

    add: FontIcons.add + ':font',
    check: FontIcons.check + ':font',
    plus: FontIcons.plus + ':font',
    burger: FontIcons.burger + ':font',
    close: FontIcons.close + ':font',
    cancel: FontIcons.cancel + ':font',
    search: FontIcons.search + ':font',
    spinner: FontIcons.spinner + ':font',
    information: FontIcons.information + ':font',
    contacts: FontIcons.contacts + ':font',
    minus: FontIcons.minus + ':font',
    arrowRight: FontIcons.arrowRight + ':font',
    arrowLeft: FontIcons.arrowLeft + ':font',
    resize: FontIcons.resize + ':font',
    expand: FontIcons.expand + ':font',
    sorting: FontIcons.sorting + ':font',
    arrowLast: FontIcons.arrowLast + ':font',
    arrowFirst: FontIcons.arrowFirst + ':font',
    sortDown: FontIcons.sortDown + ':font',
    home: FontIcons.home + ':font',
    reload: FontIcons.reload + ':font',
    actions: FontIcons.actions + ':font',
    like: FontIcons.like + ':font',
    dislike: FontIcons.dislike + ':font',
    stopping: FontIcons.stopping + ':font',
    delete: FontIcons.delete + ':font',
    externalLink: FontIcons.externalLink + ':font',
    edit: FontIcons.edit + ':font',
    tree: FontIcons.tree + ':font',
    user: FontIcons.user + ':font',
    addUser: FontIcons.addUser + ':font',
    delUser: FontIcons.delUser + ':font',
    pin: FontIcons.pin + ':font',
    scissors: FontIcons.scissors + ':font',
    mail: FontIcons.mail + ':font',
    save: FontIcons.save + ':font',
    file: FontIcons.file + ':font',
    settings: FontIcons.settings + ':font',
    picture: FontIcons.picture + ':font',
    photoCamera: FontIcons.photoCamera + ':font',
    bell: FontIcons.bell + ':font',
    addGroup: FontIcons.addGroup + ':font',
    delGroup: FontIcons.delGroup + ':font',
    dashboard: FontIcons.dashboard + ':font',
    cloudComputing: FontIcons.cloudComputing + ':font',
    creditCard: FontIcons.creditCard + ':font',
    download: FontIcons.download + ':font',
    filter: FontIcons.filter + ':font',
    chat: FontIcons.chat + ':font',
    calendar: FontIcons.calendar + ':font',
    qrCode: FontIcons.qrCode + ':font',
    power: FontIcons.power + ':font',
    network: FontIcons.network + ':font',
    tag: FontIcons.tag + ':font',
    warning: FontIcons.warning + ':font',
    grid: FontIcons.grid + ':font',
    copy: FontIcons.copy + ':font',
    star: FontIcons.star + ':font',
    sync: FontIcons.sync + ':font',
    profile: FontIcons.profile + ':font',
    project: FontIcons.project + ':font',
    query: FontIcons.query + ':font',
    printer: FontIcons.printer + ':font',
    money: FontIcons.money + ':font',
    webProgramming: FontIcons.webProgramming + ':font',
    view: FontIcons.view + ':font',
    unlink: FontIcons.unlink + ':font',
    map: FontIcons.map + ':font',
    earthGlobe: FontIcons.earthGlobe + ':font',
    compass: FontIcons.compass + ':font',
    finish: FontIcons.finish + ':font',
    facebook: FontIcons.facebook + ':font',
    google: FontIcons.google + ':font',
    instagram: FontIcons.instagram + ':font',
    vkLogo: FontIcons.vkLogo + ':font',
    playButton: FontIcons.playButton + ':font',
    pause: FontIcons.pause + ':font',
    stop: FontIcons.stop + ':font',
    share: FontIcons.share + ':font',
    chevronDoubleLeft: FontIcons.chevronDoubleLeft + ':font',
    chevronDoubleRight: FontIcons.chevronDoubleRight + ':font',
    time: FontIcons.time + ':font',
    team: FontIcons.team + ':font',
    solar: FontIcons.solar + ':font',
    solarBlack: FontIcons.solarBlack + ':font',
    moon: FontIcons.moon + ':font',
    accessLock: FontIcons.accessLock + ':font',
    accessUnlock: FontIcons.accessUnlock + ':font',
    documentation: FontIcons.documentation + ':font',
    elements: FontIcons.elements + ':font',
    forms: FontIcons.forms + ':font',
    graphic: FontIcons.graphic + ':font',
    layout: FontIcons.layout + ':font',
    main: FontIcons.main + ':font',
    question: SvgIcons.question + ':svg:default',
    gitlab: SvgIcons.gitlab + ':svg:default',
    figma: SvgIcons.figma + ':svg:default',
    angular: SvgIcons.angular + ':svg:default',
    arnold: SvgIcons.arnold + ':svg:default',
    dribbble: SvgIcons.dribbble + ':svg:default',
    russia: SvgIcons.russia + ':svg:flags',
    germany: SvgIcons.germany + ':svg:flags',
    usa: SvgIcons.usa + ':svg:flags',
    france: SvgIcons.france + ':svg:flags',
    unitedKingdom: SvgIcons.unitedKingdom + ':svg:flags',
    italy: SvgIcons.italy + ':svg:flags',
    spain: SvgIcons.spain + ':svg:flags',
    sweden: SvgIcons.sweden + ':svg:flags',
    runningMan: AnimatedIcons.runningMan + ':animated:default'
  };
  static schemes = Schemes;
  static themes = Themes;
  static sizes = Sizes;
  static outline = Outline;
  static position = Positions;
  static shape = Shapes;
  static type = PositionType;
  static width = Width;
  static skeleton = {
    type: TypeSkeleton
  };
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static stack = {
    type: PositionType,
    gutter: StackGutter
  };
  static form = {
    layout: FormLayout,
    input: InputType,
    button: {
      type: TypeButton
    },
    validators: {
      typeError: ValidationTypeError
    }
  };
  static select = SelectMode;
  static block = {
    type: TypeBlock,
  };
  static colors = Colors;
  static padding = Paddings;
  static state = InputState;
  static popover = {
    position: PopoverPlacements,
    trigger: PopoverTriggers
  };
  static menu = {
    matching: Matching
  };
  static table = {
    features: TableFeatures
  };
  static gantt = {
    statuses: GanttRequestStatuses
  };
}

