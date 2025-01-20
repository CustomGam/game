const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.LocalStorage,
		C3.Plugins.Eponesh_GameScore,
		C3.Behaviors.Physics,
		C3.Behaviors.custom,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.custom.Acts.SetSpeed,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Physics.Acts.SetImmovable,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Physics.Acts.ApplyImpulse,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{WhatsAppImage20250120At072400Photoroom: 0},
	{Спрайт: 0},
	{Тач: 0},
	{Текст: 0},
	{майн: 0},
	{Текст2: 0},
	{Текст3: 0},
	{ЛокальноеХранилище: 0},
	{GamePush: 0},
	{Физика: 0},
	{БезНазванияPhotoroom: 0},
	{НастраиваемоеДвижение: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{майнинг: 0}
];

self.InstanceType = {
	WhatsAppImage20250120At072400Photoroom: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	Текст: class extends self.ITextInstance {},
	Текст2: class extends self.ITextInstance {},
	Текст3: class extends self.ITextInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	GamePush: class extends self.IInstance {},
	БезНазванияPhotoroom: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {}
}