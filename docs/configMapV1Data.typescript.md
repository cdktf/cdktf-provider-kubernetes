# `configMapV1Data` Submodule <a name="`configMapV1Data` Submodule" id="@cdktf/provider-kubernetes.configMapV1Data"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigMapV1Data <a name="ConfigMapV1Data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data kubernetes_config_map_v1_data}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

new configMapV1Data.ConfigMapV1Data(scope: Construct, id: string, config: ConfigMapV1DataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig">ConfigMapV1DataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig">ConfigMapV1DataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetFieldManager">resetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata"></a>

```typescript
public putMetadata(value: ConfigMapV1DataMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

---

##### `resetFieldManager` <a name="resetFieldManager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetFieldManager"></a>

```typescript
public resetFieldManager(): void
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigMapV1Data resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

configMapV1Data.ConfigMapV1Data.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

configMapV1Data.ConfigMapV1Data.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

configMapV1Data.ConfigMapV1Data.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

configMapV1Data.ConfigMapV1Data.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigMapV1Data resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigMapV1Data to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigMapV1Data that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigMapV1Data to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference">ConfigMapV1DataMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManagerInput">fieldManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManager">fieldManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadata"></a>

```typescript
public readonly metadata: ConfigMapV1DataMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference">ConfigMapV1DataMetadataOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fieldManagerInput`<sup>Optional</sup> <a name="fieldManagerInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManagerInput"></a>

```typescript
public readonly fieldManagerInput: string;
```

- *Type:* string

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadataInput"></a>

```typescript
public readonly metadataInput: ConfigMapV1DataMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fieldManager`<sup>Required</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManager"></a>

```typescript
public readonly fieldManager: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigMapV1DataConfig <a name="ConfigMapV1DataConfig" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.Initializer"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

const configMapV1DataConfig: configMapV1Data.ConfigMapV1DataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | The data we want to add to the ConfigMap. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.fieldManager">fieldManager</a></code> | <code>string</code> | Set the name of the field manager for the specified labels. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force overwriting data that is managed outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#id ConfigMapV1Data#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The data we want to add to the ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#data ConfigMapV1Data#data}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.metadata"></a>

```typescript
public readonly metadata: ConfigMapV1DataMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#metadata ConfigMapV1Data#metadata}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.fieldManager"></a>

```typescript
public readonly fieldManager: string;
```

- *Type:* string

Set the name of the field manager for the specified labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#field_manager ConfigMapV1Data#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force overwriting data that is managed outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#force ConfigMapV1Data#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#id ConfigMapV1Data#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConfigMapV1DataMetadata <a name="ConfigMapV1DataMetadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.Initializer"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

const configMapV1DataMetadata: configMapV1Data.ConfigMapV1DataMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.name">name</a></code> | <code>string</code> | The name of the ConfigMap. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the ConfigMap. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#name ConfigMapV1Data#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/resources/config_map_v1_data#namespace ConfigMapV1Data#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigMapV1DataMetadataOutputReference <a name="ConfigMapV1DataMetadataOutputReference" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer"></a>

```typescript
import { configMapV1Data } from '@cdktf/provider-kubernetes'

new configMapV1Data.ConfigMapV1DataMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigMapV1DataMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

---



