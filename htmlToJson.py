# import re

# f = open('htmlToChange.txt','r', encoding="utf-8")

import re
import json

links = []

textfile = open('htmlToChange.txt', 'r')
filetext = textfile.read()
textfile.close()
matchesIds = re.findall('data-media-id=".*?"', filetext)
for word in matchesIds:
	media = {
		"id": "",
		"type": "",
		"thumbnail": "",
		"image": "",
		"title": "",
		"description": "",
		"videoId": ""
		}
	idFound = re.findall('\d', word)[0]
	media["id"] = idFound
	links.append(media)

matchesTypes = re.findall('data-media-type=".*?"', filetext)
for i, word in enumerate(matchesTypes):
	typeFound = re.findall('(image|video)', word)[0]
	links[i]["type"] = typeFound
# print(links)

matchesThumbnail = re.findall('<div className="data-media-thumbnail"><img src="thumbs/klinik.jpg"></div>', filetext)
for i, word in enumerate(matchesThumbnail):
	if re.findall('["]thumb.*?["]', word)[0] != "":
		thumbnailFound = re.findall('["]thumb.*?["]', word)[0]
	links[i]["thumbnail"] = thumbnailFound.strip('\"')
# print(links)

matchesImage = re.findall('<img src=".*?">[^<]', filetext)
for i, word in enumerate(matchesImage):
	if re.findall('["].*?["]', word)[0] != "":
		imageFound = re.findall('["].*?["]', word)[0]
	links[i]["image"] = imageFound.strip('\"')

matchesTtitle = re.findall('<div className="media-link-title">.*</div>', filetext)
for i, word in enumerate(matchesTtitle):
	if re.findall('[>].*?[<]', word)[0] != "":
		titleFound = re.findall('[>].*?[<]', word)[0]
	links[i]["title"] = titleFound.replace(">", "").replace("<", "")

matchesDescription = re.findall('<div className="media-link-description">.*</div>', filetext)
for i, word in enumerate(matchesDescription):
	if re.findall('[>].*?[<]', word)[0] != "":
		descriptionFound = re.findall('[>].*?[<]', word)[0]
	links[i]["description"] = descriptionFound.replace(">", "").replace("<", "")

matchesVideoId = re.findall('media-link-video-id.*?>\d*<', filetext)
for i, word in enumerate(matchesVideoId):
	if re.findall('\d+', word)[0] != "":
		descriptionFound = re.findall('\d+', word)[0]
	links[i]["videoId"] = descriptionFound
	print(links[i])





with open('data.txt', 'w') as outfile:
    outfile.write(str(links))

with open('data.json', 'w') as outfile:
    json.dump(links, outfile, ensure_ascii=False)
