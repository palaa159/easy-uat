dev:
	cd nodejs/app \
	&& yarn \
	&& yarn dev
ddev:
	echo ENV=dev > .env \
	&& docker-compose up --build -d
dprod:
	echo ENV=prod > .env \
	&& docker-compose up --build --force-recreate -d
stop:
	docker ps -q | awk '{print $1}' | xargs docker stop || true
dlog:
	docker-compose logs -f -t
deploy:
	make save \
	&& git push production master
save:
	git add -A \
	&& git commit -a -m "save" \
	&& git push origin master