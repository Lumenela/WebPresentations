<<<<<<< HEAD
###*
* @module common
* @author Matt Crinklaw-Vogt
*###
define(->
	###*
	* Utilities for working with files, file paths and URIs.
	* @class common.FileUtils
	*###
	FileUtils =
		###*
		* Returns the base name of the path
		* e.g., baseName("path/to/some/file.txt") will return "file.txt"
		* baseName("path/to/some/file.txt", "txt") will return "file"
		* baseName("path/to/some/dir/") will return "dir"
		* @method baseName
		* @param {String} path the path
		* @param {String} [extension] extension to be stripped
		* @returns {String} base name
		*###
=======
define(->
	FileUtils =
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
		baseName: (path, extension) ->
			if (path[path.length - 1] is "/")
				path = path.substring(0, path.length - 1)

			idx = path.lastIndexOf("/")
			if idx isnt -1 and idx + 1 < path.length
				path = path.substring(idx+1, path.length)

			if extension?
				idx = path.lastIndexOf(extension)
				if idx + extension.length is path.length
					path = path.substring(0, idx)

			path

<<<<<<< HEAD
		###*
		* Returns the image type of a URI based on its extension
		* or data: attribute if it is a data url.
		* @method imageType
		* @param {String} uri url or data url to image
		* @returns {String} upper case extension or data: type
		*###
=======
		# TODO: make a generic type that returns the mime type
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
		imageType: (uri) ->
			if (uri.indexOf("data:") is 0)
				idx = uri.indexOf(";")
				uri.substring(11, idx).toUpperCase()
			else
				FileUtils.extension(uri)

<<<<<<< HEAD
		###*
		* Returns the extension of the file pointed to be the URI
		* Ignores query parameters that are a part of the URI
		* @method extension
		* @param {String} uri uri to file
		* @returns {String} upper case extension
		*###
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
		extension: (uri) ->
			idx = uri.lastIndexOf(".")
			if idx isnt -1 and idx+1 < uri.length
				extension = uri.substring(idx+1, uri.length)
				idx = extension.lastIndexOf("?")
				if idx isnt -1
					extension = extension.substring(0, idx)
				extension.toUpperCase()
			else
				""

<<<<<<< HEAD
		###*
		* Converts an extension to a mime type
		* @method type
		* @param {String} extension Upper cased extension
		* @returns {String} mime type
		*###
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
		type: (extension) ->
			switch extension
				when "MP4" then "video/mp4"
				when "WEBM" then "video/webm"
				when "OGG" then "video/ogg"
				else ""
)