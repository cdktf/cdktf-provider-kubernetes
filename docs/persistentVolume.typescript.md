# `persistentVolume` Submodule <a name="`persistentVolume` Submodule" id="@cdktf/provider-kubernetes.persistentVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolume <a name="PersistentVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume kubernetes_persistent_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolume(scope: Construct, id: string, config: PersistentVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig">PersistentVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig">PersistentVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata"></a>

```typescript
public putMetadata(value: PersistentVolumeMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec"></a>

```typescript
public putSpec(value: IResolvable | PersistentVolumeSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: PersistentVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

persistentVolume.PersistentVolume.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

persistentVolume.PersistentVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

persistentVolume.PersistentVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

persistentVolume.PersistentVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput">specInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeSpecList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput"></a>

```typescript
public readonly metadataInput: PersistentVolumeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PersistentVolumeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PersistentVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeConfig <a name="PersistentVolumeConfig" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeConfig: persistentVolume.PersistentVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec">spec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]</code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#metadata PersistentVolume#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec"></a>

```typescript
public readonly spec: IResolvable | PersistentVolumeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#spec PersistentVolume#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#timeouts PersistentVolume#timeouts}

---

### PersistentVolumeMetadata <a name="PersistentVolumeMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeMetadata: persistentVolume.PersistentVolumeMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#annotations PersistentVolume#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#labels PersistentVolume#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

### PersistentVolumeSpec <a name="PersistentVolumeSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpec: persistentVolume.PersistentVolumeSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes">accessModes</a></code> | <code>string[]</code> | Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity">capacity</a></code> | <code>{[ key: string ]: string}</code> | A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>string</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName">storageClassName</a></code> | <code>string</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode">volumeMode</a></code> | <code>string</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#access_modes PersistentVolume#access_modes}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity"></a>

```typescript
public readonly capacity: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#capacity PersistentVolume#capacity}

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource"></a>

```typescript
public readonly persistentVolumeSource: PersistentVolumeSpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#persistent_volume_source PersistentVolume#persistent_volume_source}

---

##### `claimRef`<sup>Optional</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef"></a>

```typescript
public readonly claimRef: PersistentVolumeSpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#claim_ref PersistentVolume#claim_ref}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#mount_options PersistentVolume#mount_options}

---

##### `nodeAffinity`<sup>Optional</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: PersistentVolumeSpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_affinity PersistentVolume#node_affinity}

---

##### `persistentVolumeReclaimPolicy`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy"></a>

```typescript
public readonly persistentVolumeReclaimPolicy: string;
```

- *Type:* string

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#persistent_volume_reclaim_policy PersistentVolume#persistent_volume_reclaim_policy}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#storage_class_name PersistentVolume#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_mode PersistentVolume#volume_mode}

---

### PersistentVolumeSpecClaimRef <a name="PersistentVolumeSpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecClaimRef: persistentVolume.PersistentVolumeSpecClaimRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name">name</a></code> | <code>string</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecNodeAffinity <a name="PersistentVolumeSpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecNodeAffinity: persistentVolume.PersistentVolumeSpecNodeAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required"></a>

```typescript
public readonly required: PersistentVolumeSpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#required PersistentVolume#required}

---

### PersistentVolumeSpecNodeAffinityRequired <a name="PersistentVolumeSpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecNodeAffinityRequired: persistentVolume.PersistentVolumeSpecNodeAffinityRequired = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | node_selector_term block. |

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```typescript
public readonly nodeSelectorTerm: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]

node_selector_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_selector_term PersistentVolume#node_selector_term}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm: persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">matchFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | match_fields block. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#match_expressions PersistentVolume#match_expressions}

---

##### `matchFields`<sup>Optional</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```typescript
public readonly matchFields: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

match_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#match_fields PersistentVolume#match_fields}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions: persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields: persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecPersistentVolumeSource <a name="PersistentVolumeSpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSource: persistentVolume.PersistentVolumeSpecPersistentVolumeSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `awsElasticBlockStore`<sup>Optional</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```typescript
public readonly awsElasticBlockStore: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}

---

##### `azureDisk`<sup>Optional</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk"></a>

```typescript
public readonly azureDisk: PersistentVolumeSpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#azure_disk PersistentVolume#azure_disk}

---

##### `azureFile`<sup>Optional</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile"></a>

```typescript
public readonly azureFile: PersistentVolumeSpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#azure_file PersistentVolume#azure_file}

---

##### `cephFs`<sup>Optional</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs"></a>

```typescript
public readonly cephFs: PersistentVolumeSpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#ceph_fs PersistentVolume#ceph_fs}

---

##### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder"></a>

```typescript
public readonly cinder: PersistentVolumeSpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#cinder PersistentVolume#cinder}

---

##### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi"></a>

```typescript
public readonly csi: PersistentVolumeSpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#csi PersistentVolume#csi}

---

##### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc"></a>

```typescript
public readonly fc: PersistentVolumeSpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fc PersistentVolume#fc}

---

##### `flexVolume`<sup>Optional</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume"></a>

```typescript
public readonly flexVolume: PersistentVolumeSpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#flex_volume PersistentVolume#flex_volume}

---

##### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker"></a>

```typescript
public readonly flocker: PersistentVolumeSpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#flocker PersistentVolume#flocker}

---

##### `gcePersistentDisk`<sup>Optional</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```typescript
public readonly gcePersistentDisk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#gce_persistent_disk PersistentVolume#gce_persistent_disk}

---

##### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs"></a>

```typescript
public readonly glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#glusterfs PersistentVolume#glusterfs}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath"></a>

```typescript
public readonly hostPath: PersistentVolumeSpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#host_path PersistentVolume#host_path}

---

##### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi"></a>

```typescript
public readonly iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iscsi PersistentVolume#iscsi}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local"></a>

```typescript
public readonly local: PersistentVolumeSpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#local PersistentVolume#local}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs"></a>

```typescript
public readonly nfs: PersistentVolumeSpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#nfs PersistentVolume#nfs}

---

##### `photonPersistentDisk`<sup>Optional</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```typescript
public readonly photonPersistentDisk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#photon_persistent_disk PersistentVolume#photon_persistent_disk}

---

##### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte"></a>

```typescript
public readonly quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#quobyte PersistentVolume#quobyte}

---

##### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd"></a>

```typescript
public readonly rbd: PersistentVolumeSpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd PersistentVolume#rbd}

---

##### `vsphereVolume`<sup>Optional</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume"></a>

```typescript
public readonly vsphereVolume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#vsphere_volume PersistentVolume#vsphere_volume}

---

### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">volumeId</a></code> | <code>string</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">partition</a></code> | <code>number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceAzureDisk: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode">cachingMode</a></code> | <code>string</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">dataDiskUri</a></code> | <code>string</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName">diskName</a></code> | <code>string</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind">kind</a></code> | <code>string</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```typescript
public readonly cachingMode: string;
```

- *Type:* string

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#caching_mode PersistentVolume#caching_mode}

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```typescript
public readonly dataDiskUri: string;
```

- *Type:* string

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#data_disk_uri PersistentVolume#data_disk_uri}

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#disk_name PersistentVolume#disk_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#kind PersistentVolume#kind}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceAzureFile: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName">secretName</a></code> | <code>string</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName">shareName</a></code> | <code>string</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace">secretNamespace</a></code> | <code>string</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_name PersistentVolume#secret_name}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#share_name PersistentVolume#share_name}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretNamespace`<sup>Optional</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```typescript
public readonly secretNamespace: string;
```

- *Type:* string

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_namespace PersistentVolume#secret_namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFs <a name="PersistentVolumeSpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCephFs: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors">monitors</a></code> | <code>string[]</code> | Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path">path</a></code> | <code>string</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile">secretFile</a></code> | <code>string</code> | The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user">user</a></code> | <code>string</code> | User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors"></a>

```typescript
public readonly monitors: string[];
```

- *Type:* string[]

Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#monitors PersistentVolume#monitors}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretFile`<sup>Optional</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```typescript
public readonly secretFile: string;
```

- *Type:* string

The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_file PersistentVolume#secret_file}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCephFsSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCinder <a name="PersistentVolumeSpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCinder: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId">volumeId</a></code> | <code>string</code> | Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceCsi <a name="PersistentVolumeSpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCsi: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver">driver</a></code> | <code>string</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes">volumeAttributes</a></code> | <code>{[ key: string ]: string}</code> | Attributes of the volume to publish. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_handle PersistentVolume#volume_handle}

---

##### `controllerExpandSecretRef`<sup>Optional</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```typescript
public readonly controllerExpandSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}

---

##### `controllerPublishSecretRef`<sup>Optional</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```typescript
public readonly controllerPublishSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `nodePublishSecretRef`<sup>Optional</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```typescript
public readonly nodePublishSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}

---

##### `nodeStageSecretRef`<sup>Optional</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```typescript
public readonly nodeStageSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `volumeAttributes`<sup>Optional</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```typescript
public readonly volumeAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_attributes PersistentVolume#volume_attributes}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFc <a name="PersistentVolumeSpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceFc: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun">lun</a></code> | <code>number</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs">targetWwNs</a></code> | <code>string[]</code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

FC target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```typescript
public readonly targetWwNs: string[];
```

- *Type:* string[]

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#target_ww_ns PersistentVolume#target_ww_ns}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceFlexVolume: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver">driver</a></code> | <code>string</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Extra command options if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#options PersistentVolume#options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFlocker <a name="PersistentVolumeSpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceFlocker: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName">datasetName</a></code> | <code>string</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid">datasetUuid</a></code> | <code>string</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#dataset_name PersistentVolume#dataset_name}

---

##### `datasetUuid`<sup>Optional</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```typescript
public readonly datasetUuid: string;
```

- *Type:* string

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#dataset_uuid PersistentVolume#dataset_uuid}

---

### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceGcePersistentDisk: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName">pdName</a></code> | <code>string</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition">partition</a></code> | <code>number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```typescript
public readonly pdName: string;
```

- *Type:* string

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#pd_name PersistentVolume#pd_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceGlusterfs: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName">endpointsName</a></code> | <code>string</code> | The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path">path</a></code> | <code>string</code> | The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```typescript
public readonly endpointsName: string;
```

- *Type:* string

The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#endpoints_name PersistentVolume#endpoints_name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceHostPath <a name="PersistentVolumeSpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceHostPath: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path">path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type">type</a></code> | <code>string</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#type PersistentVolume#type}

---

### PersistentVolumeSpecPersistentVolumeSourceIscsi <a name="PersistentVolumeSpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceIscsi: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn">iqn</a></code> | <code>string</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal">targetPortal</a></code> | <code>string</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface">iscsiInterface</a></code> | <code>string</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun">lun</a></code> | <code>number</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn"></a>

```typescript
public readonly iqn: string;
```

- *Type:* string

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iqn PersistentVolume#iqn}

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```typescript
public readonly targetPortal: string;
```

- *Type:* string

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#target_portal PersistentVolume#target_portal}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `iscsiInterface`<sup>Optional</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```typescript
public readonly iscsiInterface: string;
```

- *Type:* string

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iscsi_interface PersistentVolume#iscsi_interface}

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

iSCSI target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceLocal <a name="PersistentVolumeSpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceLocal: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path">path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

### PersistentVolumeSpecPersistentVolumeSourceNfs <a name="PersistentVolumeSpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceNfs: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path">path</a></code> | <code>string</code> | Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server">server</a></code> | <code>string</code> | Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#server PersistentVolume#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk: persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">pdId</a></code> | <code>string</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```typescript
public readonly pdId: string;
```

- *Type:* string

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#pd_id PersistentVolume#pd_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeSpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceQuobyte: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry">registry</a></code> | <code>string</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume">volume</a></code> | <code>string</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group">group</a></code> | <code>string</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user">user</a></code> | <code>string</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#registry PersistentVolume#registry}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume PersistentVolume#volume}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#group PersistentVolume#group}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceRbd <a name="PersistentVolumeSpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceRbd: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors">cephMonitors</a></code> | <code>string[]</code> | A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage">rbdImage</a></code> | <code>string</code> | The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring">keyring</a></code> | <code>string</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser">radosUser</a></code> | <code>string</code> | The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool">rbdPool</a></code> | <code>string</code> | The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```typescript
public readonly cephMonitors: string[];
```

- *Type:* string[]

A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#ceph_monitors PersistentVolume#ceph_monitors}

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```typescript
public readonly rbdImage: string;
```

- *Type:* string

The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd_image PersistentVolume#rbd_image}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#keyring PersistentVolume#keyring}

---

##### `radosUser`<sup>Optional</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser"></a>

```typescript
public readonly radosUser: string;
```

- *Type:* string

The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rados_user PersistentVolume#rados_user}

---

##### `rbdPool`<sup>Optional</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```typescript
public readonly rbdPool: string;
```

- *Type:* string

The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd_pool PersistentVolume#rbd_pool}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceRbdSecretRef: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeSpecPersistentVolumeSourceVsphereVolume: persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath">volumePath</a></code> | <code>string</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_path PersistentVolume#volume_path}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeTimeouts <a name="PersistentVolumeTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

const persistentVolumeTimeouts: persistentVolume.PersistentVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#create PersistentVolume#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#create PersistentVolume#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeMetadataOutputReference <a name="PersistentVolumeMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---


### PersistentVolumeSpecClaimRefOutputReference <a name="PersistentVolumeSpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecClaimRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---


### PersistentVolumeSpecList <a name="PersistentVolumeSpecList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get"></a>

```typescript
public get(index: number): PersistentVolumeSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>[]

---


### PersistentVolumeSpecNodeAffinityOutputReference <a name="PersistentVolumeSpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired"></a>

```typescript
public putRequired(value: PersistentVolumeSpecNodeAffinityRequired): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required"></a>

```typescript
public readonly required: PersistentVolumeSpecNodeAffinityRequiredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: PersistentVolumeSpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```typescript
public get(index: number): PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```typescript
public get(index: number): PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```typescript
public get(index: number): PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">putMatchFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">resetMatchFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---

##### `putMatchFields` <a name="putMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```typescript
public putMatchFields(value: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchFields` <a name="resetMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```typescript
public resetMatchFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">matchFields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">matchFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `matchFields`<sup>Required</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```typescript
public readonly matchFields: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---

##### `matchFieldsInput`<sup>Optional</sup> <a name="matchFieldsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```typescript
public readonly matchFieldsInput: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>

---


### PersistentVolumeSpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">putNodeSelectorTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSelectorTerm` <a name="putNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```typescript
public putNodeSelectorTerm(value: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">nodeSelectorTermInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```typescript
public readonly nodeSelectorTerm: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `nodeSelectorTermInput`<sup>Optional</sup> <a name="nodeSelectorTermInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```typescript
public readonly nodeSelectorTermInput: IResolvable | PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---


### PersistentVolumeSpecOutputReference <a name="PersistentVolumeSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef">putClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity">putNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource">putPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef">resetClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity">resetNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy">resetPersistentVolumeReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimRef` <a name="putClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef"></a>

```typescript
public putClaimRef(value: PersistentVolumeSpecClaimRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `putNodeAffinity` <a name="putNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity"></a>

```typescript
public putNodeAffinity(value: PersistentVolumeSpecNodeAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `putPersistentVolumeSource` <a name="putPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource"></a>

```typescript
public putPersistentVolumeSource(value: PersistentVolumeSpecPersistentVolumeSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `resetClaimRef` <a name="resetClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef"></a>

```typescript
public resetClaimRef(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetNodeAffinity` <a name="resetNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity"></a>

```typescript
public resetNodeAffinity(): void
```

##### `resetPersistentVolumeReclaimPolicy` <a name="resetPersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```typescript
public resetPersistentVolumeReclaimPolicy(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode"></a>

```typescript
public resetVolumeMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput">capacityInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput">claimRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput">nodeAffinityInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput">persistentVolumeReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput">persistentVolumeSourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity">capacity</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimRef`<sup>Required</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef"></a>

```typescript
public readonly claimRef: PersistentVolumeSpecClaimRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a>

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: PersistentVolumeSpecNodeAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a>

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource"></a>

```typescript
public readonly persistentVolumeSource: PersistentVolumeSpecPersistentVolumeSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput"></a>

```typescript
public readonly accessModesInput: string[];
```

- *Type:* string[]

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `claimRefInput`<sup>Optional</sup> <a name="claimRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput"></a>

```typescript
public readonly claimRefInput: PersistentVolumeSpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `nodeAffinityInput`<sup>Optional</sup> <a name="nodeAffinityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput"></a>

```typescript
public readonly nodeAffinityInput: PersistentVolumeSpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `persistentVolumeReclaimPolicyInput`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```typescript
public readonly persistentVolumeReclaimPolicyInput: string;
```

- *Type:* string

---

##### `persistentVolumeSourceInput`<sup>Optional</sup> <a name="persistentVolumeSourceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput"></a>

```typescript
public readonly persistentVolumeSourceInput: PersistentVolumeSpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput"></a>

```typescript
public readonly volumeModeInput: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity"></a>

```typescript
public readonly capacity: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `persistentVolumeReclaimPolicy`<sup>Required</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```typescript
public readonly persistentVolumeReclaimPolicy: string;
```

- *Type:* string

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">cachingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">dataDiskUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">cachingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">dataDiskUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">diskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingModeInput`<sup>Optional</sup> <a name="cachingModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```typescript
public readonly cachingModeInput: string;
```

- *Type:* string

---

##### `dataDiskUriInput`<sup>Optional</sup> <a name="dataDiskUriInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```typescript
public readonly dataDiskUriInput: string;
```

- *Type:* string

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```typescript
public readonly diskNameInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```typescript
public readonly cachingMode: string;
```

- *Type:* string

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```typescript
public readonly dataDiskUri: string;
```

- *Type:* string

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">resetSecretNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretNamespace` <a name="resetSecretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```typescript
public resetSecretNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">secretNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">secretNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `secretNamespaceInput`<sup>Optional</sup> <a name="secretNamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```typescript
public readonly secretNamespaceInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `secretNamespace`<sup>Required</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```typescript
public readonly secretNamespace: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">resetSecretFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretFile` <a name="resetSecretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```typescript
public resetSecretFile(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">monitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">secretFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors">monitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">secretFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `monitorsInput`<sup>Optional</sup> <a name="monitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```typescript
public readonly monitorsInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretFileInput`<sup>Optional</sup> <a name="secretFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```typescript
public readonly secretFileInput: string;
```

- *Type:* string

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```typescript
public readonly monitors: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretFile`<sup>Required</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```typescript
public readonly secretFile: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">putControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">putControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">putNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">putNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">resetControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">resetControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">resetNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">resetNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">resetVolumeAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControllerExpandSecretRef` <a name="putControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```typescript
public putControllerExpandSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `putControllerPublishSecretRef` <a name="putControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```typescript
public putControllerPublishSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `putNodePublishSecretRef` <a name="putNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```typescript
public putNodePublishSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `putNodeStageSecretRef` <a name="putNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```typescript
public putNodeStageSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `resetControllerExpandSecretRef` <a name="resetControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```typescript
public resetControllerExpandSecretRef(): void
```

##### `resetControllerPublishSecretRef` <a name="resetControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```typescript
public resetControllerPublishSecretRef(): void
```

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetNodePublishSecretRef` <a name="resetNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```typescript
public resetNodePublishSecretRef(): void
```

##### `resetNodeStageSecretRef` <a name="resetNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```typescript
public resetNodeStageSecretRef(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetVolumeAttributes` <a name="resetVolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```typescript
public resetVolumeAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">controllerExpandSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">controllerPublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">nodePublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">nodeStageSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">volumeAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">volumeAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controllerExpandSecretRef`<sup>Required</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```typescript
public readonly controllerExpandSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `controllerPublishSecretRef`<sup>Required</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```typescript
public readonly controllerPublishSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `nodePublishSecretRef`<sup>Required</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```typescript
public readonly nodePublishSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `nodeStageSecretRef`<sup>Required</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```typescript
public readonly nodeStageSecretRef: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `controllerExpandSecretRefInput`<sup>Optional</sup> <a name="controllerExpandSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```typescript
public readonly controllerExpandSecretRefInput: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `controllerPublishSecretRefInput`<sup>Optional</sup> <a name="controllerPublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```typescript
public readonly controllerPublishSecretRefInput: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `nodePublishSecretRefInput`<sup>Optional</sup> <a name="nodePublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```typescript
public readonly nodePublishSecretRefInput: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `nodeStageSecretRefInput`<sup>Optional</sup> <a name="nodeStageSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```typescript
public readonly nodeStageSecretRefInput: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeAttributesInput`<sup>Optional</sup> <a name="volumeAttributesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```typescript
public readonly volumeAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```typescript
public readonly volumeHandleInput: string;
```

- *Type:* string

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeAttributes`<sup>Required</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```typescript
public readonly volumeAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">targetWwNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">targetWwNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetWwNsInput`<sup>Optional</sup> <a name="targetWwNsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```typescript
public readonly targetWwNsInput: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```typescript
public readonly targetWwNs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">resetDatasetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```typescript
public resetDatasetName(): void
```

##### `resetDatasetUuid` <a name="resetDatasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```typescript
public resetDatasetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">datasetUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">datasetUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```typescript
public readonly datasetNameInput: string;
```

- *Type:* string

---

##### `datasetUuidInput`<sup>Optional</sup> <a name="datasetUuidInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```typescript
public readonly datasetUuidInput: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `datasetUuid`<sup>Required</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```typescript
public readonly datasetUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">pdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">pdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `pdNameInput`<sup>Optional</sup> <a name="pdNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```typescript
public readonly pdNameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```typescript
public readonly pdName: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">endpointsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">endpointsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointsNameInput`<sup>Optional</sup> <a name="endpointsNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```typescript
public readonly endpointsNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```typescript
public readonly endpointsName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">resetIscsiInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun">resetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetIscsiInterface` <a name="resetIscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```typescript
public resetIscsiInterface(): void
```

##### `resetLun` <a name="resetLun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```typescript
public resetLun(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">iqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">iscsiInterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">targetPortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn">iqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">iscsiInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">targetPortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `iqnInput`<sup>Optional</sup> <a name="iqnInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```typescript
public readonly iqnInput: string;
```

- *Type:* string

---

##### `iscsiInterfaceInput`<sup>Optional</sup> <a name="iscsiInterfaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```typescript
public readonly iscsiInterfaceInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetPortalInput`<sup>Optional</sup> <a name="targetPortalInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```typescript
public readonly targetPortalInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```typescript
public readonly iqn: string;
```

- *Type:* string

---

##### `iscsiInterface`<sup>Required</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```typescript
public readonly iscsiInterface: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```typescript
public readonly targetPortal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">putAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk">putAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile">putAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs">putCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder">putCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi">putCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc">putFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume">putFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker">putFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">putGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs">putGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath">putHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi">putIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">putPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte">putQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd">putRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume">putVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">resetAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk">resetAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile">resetAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs">resetCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder">resetCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi">resetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc">resetFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume">resetFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker">resetFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">resetGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs">resetGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi">resetIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">resetPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte">resetQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd">resetRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume">resetVsphereVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsElasticBlockStore` <a name="putAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```typescript
public putAwsElasticBlockStore(value: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `putAzureDisk` <a name="putAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```typescript
public putAzureDisk(value: PersistentVolumeSpecPersistentVolumeSourceAzureDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `putAzureFile` <a name="putAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```typescript
public putAzureFile(value: PersistentVolumeSpecPersistentVolumeSourceAzureFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `putCephFs` <a name="putCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```typescript
public putCephFs(value: PersistentVolumeSpecPersistentVolumeSourceCephFs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `putCinder` <a name="putCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder"></a>

```typescript
public putCinder(value: PersistentVolumeSpecPersistentVolumeSourceCinder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `putCsi` <a name="putCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi"></a>

```typescript
public putCsi(value: PersistentVolumeSpecPersistentVolumeSourceCsi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `putFc` <a name="putFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc"></a>

```typescript
public putFc(value: PersistentVolumeSpecPersistentVolumeSourceFc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `putFlexVolume` <a name="putFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```typescript
public putFlexVolume(value: PersistentVolumeSpecPersistentVolumeSourceFlexVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `putFlocker` <a name="putFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```typescript
public putFlocker(value: PersistentVolumeSpecPersistentVolumeSourceFlocker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `putGcePersistentDisk` <a name="putGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```typescript
public putGcePersistentDisk(value: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `putGlusterfs` <a name="putGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```typescript
public putGlusterfs(value: PersistentVolumeSpecPersistentVolumeSourceGlusterfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `putHostPath` <a name="putHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```typescript
public putHostPath(value: PersistentVolumeSpecPersistentVolumeSourceHostPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `putIscsi` <a name="putIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```typescript
public putIscsi(value: PersistentVolumeSpecPersistentVolumeSourceIscsi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `putLocal` <a name="putLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal"></a>

```typescript
public putLocal(value: PersistentVolumeSpecPersistentVolumeSourceLocal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs"></a>

```typescript
public putNfs(value: PersistentVolumeSpecPersistentVolumeSourceNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `putPhotonPersistentDisk` <a name="putPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```typescript
public putPhotonPersistentDisk(value: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `putQuobyte` <a name="putQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```typescript
public putQuobyte(value: PersistentVolumeSpecPersistentVolumeSourceQuobyte): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `putRbd` <a name="putRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd"></a>

```typescript
public putRbd(value: PersistentVolumeSpecPersistentVolumeSourceRbd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `putVsphereVolume` <a name="putVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```typescript
public putVsphereVolume(value: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `resetAwsElasticBlockStore` <a name="resetAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```typescript
public resetAwsElasticBlockStore(): void
```

##### `resetAzureDisk` <a name="resetAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```typescript
public resetAzureDisk(): void
```

##### `resetAzureFile` <a name="resetAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```typescript
public resetAzureFile(): void
```

##### `resetCephFs` <a name="resetCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```typescript
public resetCephFs(): void
```

##### `resetCinder` <a name="resetCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```typescript
public resetCinder(): void
```

##### `resetCsi` <a name="resetCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```typescript
public resetCsi(): void
```

##### `resetFc` <a name="resetFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc"></a>

```typescript
public resetFc(): void
```

##### `resetFlexVolume` <a name="resetFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```typescript
public resetFlexVolume(): void
```

##### `resetFlocker` <a name="resetFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```typescript
public resetFlocker(): void
```

##### `resetGcePersistentDisk` <a name="resetGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```typescript
public resetGcePersistentDisk(): void
```

##### `resetGlusterfs` <a name="resetGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```typescript
public resetGlusterfs(): void
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```typescript
public resetHostPath(): void
```

##### `resetIscsi` <a name="resetIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```typescript
public resetIscsi(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetPhotonPersistentDisk` <a name="resetPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```typescript
public resetPhotonPersistentDisk(): void
```

##### `resetQuobyte` <a name="resetQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```typescript
public resetQuobyte(): void
```

##### `resetRbd` <a name="resetRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```typescript
public resetRbd(): void
```

##### `resetVsphereVolume` <a name="resetVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```typescript
public resetVsphereVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">awsElasticBlockStoreInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput">azureDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput">azureFileInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput">cephFsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput">cinderInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput">csiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput">fcInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">flexVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput">flockerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">gcePersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput">glusterfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput">hostPathInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput">iscsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">photonPersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput">quobyteInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput">rbdInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">vsphereVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsElasticBlockStore`<sup>Required</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```typescript
public readonly awsElasticBlockStore: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `azureDisk`<sup>Required</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```typescript
public readonly azureDisk: PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `azureFile`<sup>Required</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```typescript
public readonly azureFile: PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `cephFs`<sup>Required</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```typescript
public readonly cephFs: PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `cinder`<sup>Required</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```typescript
public readonly cinder: PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi"></a>

```typescript
public readonly csi: PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `fc`<sup>Required</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc"></a>

```typescript
public readonly fc: PersistentVolumeSpecPersistentVolumeSourceFcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a>

---

##### `flexVolume`<sup>Required</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```typescript
public readonly flexVolume: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `flocker`<sup>Required</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```typescript
public readonly flocker: PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `gcePersistentDisk`<sup>Required</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```typescript
public readonly gcePersistentDisk: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `glusterfs`<sup>Required</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```typescript
public readonly glusterfs: PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```typescript
public readonly iscsi: PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local"></a>

```typescript
public readonly local: PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```typescript
public readonly nfs: PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `photonPersistentDisk`<sup>Required</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```typescript
public readonly photonPersistentDisk: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `quobyte`<sup>Required</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```typescript
public readonly quobyte: PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `rbd`<sup>Required</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```typescript
public readonly rbd: PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `vsphereVolume`<sup>Required</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```typescript
public readonly vsphereVolume: PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `awsElasticBlockStoreInput`<sup>Optional</sup> <a name="awsElasticBlockStoreInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```typescript
public readonly awsElasticBlockStoreInput: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `azureDiskInput`<sup>Optional</sup> <a name="azureDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```typescript
public readonly azureDiskInput: PersistentVolumeSpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `azureFileInput`<sup>Optional</sup> <a name="azureFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```typescript
public readonly azureFileInput: PersistentVolumeSpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `cephFsInput`<sup>Optional</sup> <a name="cephFsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```typescript
public readonly cephFsInput: PersistentVolumeSpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `cinderInput`<sup>Optional</sup> <a name="cinderInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```typescript
public readonly cinderInput: PersistentVolumeSpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `csiInput`<sup>Optional</sup> <a name="csiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```typescript
public readonly csiInput: PersistentVolumeSpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `fcInput`<sup>Optional</sup> <a name="fcInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```typescript
public readonly fcInput: PersistentVolumeSpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `flexVolumeInput`<sup>Optional</sup> <a name="flexVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```typescript
public readonly flexVolumeInput: PersistentVolumeSpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `flockerInput`<sup>Optional</sup> <a name="flockerInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```typescript
public readonly flockerInput: PersistentVolumeSpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `gcePersistentDiskInput`<sup>Optional</sup> <a name="gcePersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```typescript
public readonly gcePersistentDiskInput: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `glusterfsInput`<sup>Optional</sup> <a name="glusterfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```typescript
public readonly glusterfsInput: PersistentVolumeSpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: PersistentVolumeSpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `iscsiInput`<sup>Optional</sup> <a name="iscsiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```typescript
public readonly iscsiInput: PersistentVolumeSpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```typescript
public readonly localInput: PersistentVolumeSpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: PersistentVolumeSpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `photonPersistentDiskInput`<sup>Optional</sup> <a name="photonPersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```typescript
public readonly photonPersistentDiskInput: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `quobyteInput`<sup>Optional</sup> <a name="quobyteInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```typescript
public readonly quobyteInput: PersistentVolumeSpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `rbdInput`<sup>Optional</sup> <a name="rbdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```typescript
public readonly rbdInput: PersistentVolumeSpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `vsphereVolumeInput`<sup>Optional</sup> <a name="vsphereVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```typescript
public readonly vsphereVolumeInput: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---


### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">pdIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">pdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `pdIdInput`<sup>Optional</sup> <a name="pdIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```typescript
public readonly pdIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```typescript
public readonly pdId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">registryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">volumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry">registry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume">volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```typescript
public readonly registryInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">resetRadosUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">resetRbdPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```typescript
public resetKeyring(): void
```

##### `resetRadosUser` <a name="resetRadosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```typescript
public resetRadosUser(): void
```

##### `resetRbdPool` <a name="resetRbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```typescript
public resetRbdPool(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">cephMonitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">keyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">radosUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">rbdImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">rbdPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">cephMonitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring">keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser">radosUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">rbdImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">rbdPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `cephMonitorsInput`<sup>Optional</sup> <a name="cephMonitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```typescript
public readonly cephMonitorsInput: string[];
```

- *Type:* string[]

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* string

---

##### `radosUserInput`<sup>Optional</sup> <a name="radosUserInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```typescript
public readonly radosUserInput: string;
```

- *Type:* string

---

##### `rbdImageInput`<sup>Optional</sup> <a name="rbdImageInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```typescript
public readonly rbdImageInput: string;
```

- *Type:* string

---

##### `rbdPoolInput`<sup>Optional</sup> <a name="rbdPoolInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```typescript
public readonly rbdPoolInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```typescript
public readonly cephMonitors: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

---

##### `radosUser`<sup>Required</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```typescript
public readonly radosUser: string;
```

- *Type:* string

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```typescript
public readonly rbdImage: string;
```

- *Type:* string

---

##### `rbdPool`<sup>Required</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```typescript
public readonly rbdPool: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">volumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">volumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```typescript
public readonly volumePathInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeTimeoutsOutputReference <a name="PersistentVolumeTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { persistentVolume } from '@cdktf/provider-kubernetes'

new persistentVolume.PersistentVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---



