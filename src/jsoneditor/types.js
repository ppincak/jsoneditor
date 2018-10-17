/** JSDoc type definitions */

/**
 * @typedef {{} | [] | string | number | boolean | null} JSON
 */

/**
 * @typedef {{
 *   name: string?,
 *   mode: 'code' | 'form' | 'text' | 'tree' | 'view'?,
 *   modes: string[]?,
 *   history: boolean?,
 *   indentation: number | string?,
 *   onChange: function (patch: JSONPatchDocument, revert: JSONPatchDocument)?,
 *   onChangeText: function ()?,
 *   onChangeMode: function (mode: string, prevMode: string)?,
 *   onError:  function (err: Error)?,
 *   isPropertyEditable: function (Path)?
 *   isValueEditable: function (Path)?,
 *   escapeUnicode: boolean?,
 *   expand: function(path: Path) : boolean?,
 *   ajv: Object?,
 *   ace: Object?
 * }} Options
 */

/**
 * @typedef {string[]} Path
 */

/**
 * @typedef {
 * {
 *   type: 'multi',
 *   multi: string[]
 * } |
 * {
 *   type: 'after',
 *   after: string
 * } |
 * {
 *   type: 'before-childs',
 *   beforeChildsOf: string
 * } |
 * {
 *   type: 'caret',
 *   path: string,
 *   input: 'property' | 'value',
 *   anchorOffset: number,
 *   focusOffset: number
 * }
 * } Selection
 */

/**
 * @typedef {{
 *   area: 'before' | 'on' | 'after' | 'inside',
 *   path: string
 * }} SelectionPointer
 */

/**
 * @typedef {{matches: ESONPointer[], active: ESONPointer}} SearchResult
 */

/**
 * @typedef {'value' | 'property' | 'before' | 'after' | 'empty'} ESONPointerArea
 */

/**
 * @typedef {{
 *   path: Path,
 *   area?: ESONPointerArea
 * }} ESONPointer
 */

/**
 * @typedef {'normal' | 'active'} SearchResultStatus
 */

/**
 * @typedef {'object' | 'array' | 'value' | 'string'} ESONType
 */

/**
 * @typedef {{
 *   op: 'add' | 'remove' | 'replace' | 'copy' | 'move' | 'test',
 *   path: string,
 *   from?: string,
 *   value?: *
 * }} JSONPatchOperation
 */

/**
 * @typedef {JSONPatchOperation[]} JSONPatchDocument
 */

/**
 * @typedef {{
 *   fromJSON: function(json: JSON, previousObject: * | undefined),
 *   toJSON: function(object: *),
 *   clone: function(object: *)
 * }} JSONPatchOptions
 */

/**
 * @typedef {{
 *   patch: JSONPatchDocument,
 *   revert: JSONPatchDocument,
 *   error: Error | null
 * }} JSONPatchResult
 */

/**
 * @typedef {Object | Array} ESON
 */

/**
 * TODO: change type of dataPath to Path? ESONPointer.path is an array, JSONSchemaError.path is a string -> make this consistent
 *
 * @typedef {{
 *   dataPath: string,
 *   message: string
 * }} JSONSchemaError
 */
