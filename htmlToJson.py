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

matchesThumbnail = re.findall('thumbnail\"><img src=\".*?\">', filetext)
for i, word in enumerate(matchesThumbnail):
	if re.findall('=\".*?\"', word)[0] != "":
		thumbnailFound = re.findall('=\".*?\"', word)[0]
	links[i]["thumbnail"] = thumbnailFound.strip('\"').strip('=')
# print(links)

matchesImage = re.findall('\s<img src=\".*?\">', filetext)
for i, word in enumerate(matchesImage):
	if re.findall('["].*?["]', word)[0] != "":
		imageFound = re.findall('["].*?["]', word)[0]
	links[i]["image"] = imageFound.strip('\"')

matchesTtitle = re.findall('<div className="media-link-title">.*</div>', filetext)
for i, word in enumerate(matchesTtitle):
	if re.findall('[>].*?[<]', word)[0] != "":
		titleFound = re.findall('[>].*?[<]', word)[0]
	links[i]["title"] = titleFound.replace(">", "").replace("<", "")

matchesDescription = re.finditer(r'<div className=\"media-link-description\">(.*?\s*)*?<\/div>', filetext)
for matchNum, match in enumerate(matchesDescription):
    
    descriptionFound = re.finditer('[>](.*?\s*)*?[<]', match.group())
    for matchNum1, match1 in enumerate(descriptionFound):
    	matchNum1 = matchNum1 + 1
    	links[matchNum]["description"] = match1.group().replace(">", "").replace("<", "").replace('\n              ', '')
    matchNum = matchNum + 1

    # print (match.group())
# matchesDescription = re.findall('<div className=\"media-link-description\">.*?\s*.*\s*<\/div>', filetext, re.MULTILINE)
# for i, word in enumerate(matchesDescription):
# 	print(matchesDescription.group())
	# if re.findall('[>].*?\s*.*\s*[<]', word)[0] != "":

	# links[matchNum]["description"] = descriptionFound.replace(">", "").replace("<", "")

matchesVideoId = re.findall('media-link-video-id.*?>\d*<', filetext)
for i, word in enumerate(matchesVideoId):
	if re.findall('\d+', word)[0] != "":
		descriptionFound = re.findall('\d+', word)[0]
	links[len(links) - len(matchesVideoId) + i]["videoId"] = descriptionFound
	# print(links[i])

with open('data.txt', 'w') as outfile:
    outfile.write(str(links))

with open('data.json', 'w') as outfile:
    json.dump(links, outfile, ensure_ascii=False)
