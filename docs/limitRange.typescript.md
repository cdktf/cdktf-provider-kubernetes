# `limitRange` Submodule <a name="`limitRange` Submodule" id="@cdktf/provider-kubernetes.limitRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LimitRange <a name="LimitRange" id="@cdktf/provider-kubernetes.limitRange.LimitRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range kubernetes_limit_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

new limitRange.LimitRange(scope: Construct, id: string, config: LimitRangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig">LimitRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.limitRange.LimitRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig">LimitRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRange.LimitRange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.limitRange.LimitRange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.limitRange.LimitRange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRange.LimitRange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.limitRange.LimitRange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.limitRange.LimitRange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.limitRange.LimitRange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.limitRange.LimitRange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRange.LimitRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.limitRange.LimitRange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.limitRange.LimitRange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRange.LimitRange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.limitRange.LimitRange.putMetadata"></a>

```typescript
public putMetadata(value: LimitRangeMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRange.LimitRange.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.limitRange.LimitRange.putSpec"></a>

```typescript
public putSpec(value: LimitRangeSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRange.LimitRange.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.limitRange.LimitRange.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LimitRange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isConstruct"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

limitRange.LimitRange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformElement"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

limitRange.LimitRange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformResource"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

limitRange.LimitRange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRange.LimitRange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

limitRange.LimitRange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LimitRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LimitRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LimitRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRange.LimitRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LimitRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference">LimitRangeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference">LimitRangeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.metadata"></a>

```typescript
public readonly metadata: LimitRangeMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference">LimitRangeMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.spec"></a>

```typescript
public readonly spec: LimitRangeSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference">LimitRangeSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.metadataInput"></a>

```typescript
public readonly metadataInput: LimitRangeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.specInput"></a>

```typescript
public readonly specInput: LimitRangeSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.limitRange.LimitRange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LimitRangeConfig <a name="LimitRangeConfig" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

const limitRangeConfig: limitRange.LimitRangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#id LimitRange#id}. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.metadata"></a>

```typescript
public readonly metadata: LimitRangeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#metadata LimitRange#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#id LimitRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.limitRange.LimitRangeConfig.property.spec"></a>

```typescript
public readonly spec: LimitRangeSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#spec LimitRange#spec}

---

### LimitRangeMetadata <a name="LimitRangeMetadata" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

const limitRangeMetadata: limitRange.LimitRangeMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.name">name</a></code> | <code>string</code> | Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the limit range must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the limit range that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#annotations LimitRange#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#generate_name LimitRange#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the limit range.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#labels LimitRange#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#name LimitRange#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the limit range must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#namespace LimitRange#namespace}

---

### LimitRangeSpec <a name="LimitRangeSpec" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpec.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

const limitRangeSpec: limitRange.LimitRangeSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec.property.limit">limit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]</code> | limit block. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpec.property.limit"></a>

```typescript
public readonly limit: IResolvable | LimitRangeSpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#limit LimitRange#limit}

---

### LimitRangeSpecLimit <a name="LimitRangeSpecLimit" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

const limitRangeSpecLimit: limitRange.LimitRangeSpecLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.default">default</a></code> | <code>{[ key: string ]: string}</code> | Default resource requirement limit value by resource name if resource limit is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.defaultRequest">defaultRequest</a></code> | <code>{[ key: string ]: string}</code> | The default resource requirement request value by resource name if resource request is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.max">max</a></code> | <code>{[ key: string ]: string}</code> | Max usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.maxLimitRequestRatio">maxLimitRequestRatio</a></code> | <code>{[ key: string ]: string}</code> | The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.min">min</a></code> | <code>{[ key: string ]: string}</code> | Min usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.type">type</a></code> | <code>string</code> | Type of resource that this limit applies to. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.default"></a>

```typescript
public readonly default: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default resource requirement limit value by resource name if resource limit is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#default LimitRange#default}

---

##### `defaultRequest`<sup>Optional</sup> <a name="defaultRequest" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.defaultRequest"></a>

```typescript
public readonly defaultRequest: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The default resource requirement request value by resource name if resource request is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#default_request LimitRange#default_request}

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.max"></a>

```typescript
public readonly max: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Max usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#max LimitRange#max}

---

##### `maxLimitRequestRatio`<sup>Optional</sup> <a name="maxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.maxLimitRequestRatio"></a>

```typescript
public readonly maxLimitRequestRatio: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value;

this represents the max burst for the named resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#max_limit_request_ratio LimitRange#max_limit_request_ratio}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.min"></a>

```typescript
public readonly min: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Min usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#min LimitRange#min}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of resource that this limit applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/limit_range#type LimitRange#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LimitRangeMetadataOutputReference <a name="LimitRangeMetadataOutputReference" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

new limitRange.LimitRangeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRange.LimitRangeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LimitRangeMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeMetadata">LimitRangeMetadata</a>

---


### LimitRangeSpecLimitList <a name="LimitRangeSpecLimitList" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

new limitRange.LimitRangeSpecLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.get"></a>

```typescript
public get(index: number): LimitRangeSpecLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LimitRangeSpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]

---


### LimitRangeSpecLimitOutputReference <a name="LimitRangeSpecLimitOutputReference" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

new limitRange.LimitRangeSpecLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetDefaultRequest">resetDefaultRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMaxLimitRequestRatio">resetMaxLimitRequestRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDefaultRequest` <a name="resetDefaultRequest" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetDefaultRequest"></a>

```typescript
public resetDefaultRequest(): void
```

##### `resetMax` <a name="resetMax" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMaxLimitRequestRatio` <a name="resetMaxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMaxLimitRequestRatio"></a>

```typescript
public resetMaxLimitRequestRatio(): void
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultInput">defaultInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultRequestInput">defaultRequestInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxInput">maxInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxLimitRequestRatioInput">maxLimitRequestRatioInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.minInput">minInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.default">default</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultRequest">defaultRequest</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.max">max</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxLimitRequestRatio">maxLimitRequestRatio</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.min">min</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRequestInput`<sup>Optional</sup> <a name="defaultRequestInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultRequestInput"></a>

```typescript
public readonly defaultRequestInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxLimitRequestRatioInput`<sup>Optional</sup> <a name="maxLimitRequestRatioInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxLimitRequestRatioInput"></a>

```typescript
public readonly maxLimitRequestRatioInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.minInput"></a>

```typescript
public readonly minInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.default"></a>

```typescript
public readonly default: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRequest`<sup>Required</sup> <a name="defaultRequest" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.defaultRequest"></a>

```typescript
public readonly defaultRequest: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.max"></a>

```typescript
public readonly max: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxLimitRequestRatio`<sup>Required</sup> <a name="maxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.maxLimitRequestRatio"></a>

```typescript
public readonly maxLimitRequestRatio: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.min"></a>

```typescript
public readonly min: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LimitRangeSpecLimit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>

---


### LimitRangeSpecOutputReference <a name="LimitRangeSpecOutputReference" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.Initializer"></a>

```typescript
import { limitRange } from '@cdktf/provider-kubernetes'

new limitRange.LimitRangeSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.resetLimit">resetLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimit` <a name="putLimit" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.putLimit"></a>

```typescript
public putLimit(value: IResolvable | LimitRangeSpecLimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.putLimit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]

---

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList">LimitRangeSpecLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.limitInput">limitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.limit"></a>

```typescript
public readonly limit: LimitRangeSpecLimitList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimitList">LimitRangeSpecLimitList</a>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: IResolvable | LimitRangeSpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpecLimit">LimitRangeSpecLimit</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRange.LimitRangeSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LimitRangeSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRange.LimitRangeSpec">LimitRangeSpec</a>

---



