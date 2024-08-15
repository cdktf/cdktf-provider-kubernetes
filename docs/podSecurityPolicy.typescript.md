# `podSecurityPolicy` Submodule <a name="`podSecurityPolicy` Submodule" id="@cdktf/provider-kubernetes.podSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodSecurityPolicy <a name="PodSecurityPolicy" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy kubernetes_pod_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicy(scope: Construct, id: string, config: PodSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig">PodSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig">PodSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata"></a>

```typescript
public putMetadata(value: PodSecurityPolicyMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec"></a>

```typescript
public putSpec(value: PodSecurityPolicySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PodSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

podSecurityPolicy.PodSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

podSecurityPolicy.PodSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

podSecurityPolicy.PodSecurityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

podSecurityPolicy.PodSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PodSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PodSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PodSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PodSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata"></a>

```typescript
public readonly metadata: PodSecurityPolicyMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec"></a>

```typescript
public readonly spec: PodSecurityPolicySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput"></a>

```typescript
public readonly metadataInput: PodSecurityPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput"></a>

```typescript
public readonly specInput: PodSecurityPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PodSecurityPolicyConfig <a name="PodSecurityPolicyConfig" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicyConfig: podSecurityPolicy.PodSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata"></a>

```typescript
public readonly metadata: PodSecurityPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#metadata PodSecurityPolicy#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec"></a>

```typescript
public readonly spec: PodSecurityPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#spec PodSecurityPolicy#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#id PodSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodSecurityPolicyMetadata <a name="PodSecurityPolicyMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicyMetadata: podSecurityPolicy.PodSecurityPolicyMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name">name</a></code> | <code>string</code> | Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#annotations PodSecurityPolicy#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#labels PodSecurityPolicy#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#name PodSecurityPolicy#name}

---

### PodSecurityPolicySpec <a name="PodSecurityPolicySpec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpec: podSecurityPolicy.PodSecurityPolicySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup">fsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | fs_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser">runAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | run_as_user block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups">supplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | supplemental_groups block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities">allowedCapabilities</a></code> | <code>string[]</code> | allowedCapabilities is a list of capabilities that can be requested to add to the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes">allowedFlexVolumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]</code> | allowed_flex_volumes block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths">allowedHostPaths</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]</code> | allowed_host_paths block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes">allowedProcMountTypes</a></code> | <code>string[]</code> | AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls">allowedUnsafeSysctls</a></code> | <code>string[]</code> | allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation">allowPrivilegeEscalation</a></code> | <code>boolean \| cdktf.IResolvable</code> | allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities">defaultAddCapabilities</a></code> | <code>string[]</code> | defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation">defaultAllowPrivilegeEscalation</a></code> | <code>boolean \| cdktf.IResolvable</code> | defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls">forbiddenSysctls</a></code> | <code>string[]</code> | forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc">hostIpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | hostIPC determines if the policy allows the use of HostIPC in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork">hostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid">hostPid</a></code> | <code>boolean \| cdktf.IResolvable</code> | hostPID determines if the policy allows the use of HostPID in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts">hostPorts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]</code> | host_ports block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | privileged determines if a pod can request to be run as privileged. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem">readOnlyRootFilesystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | readOnlyRootFilesystem when set to true will force containers to run with a read only root file system. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities">requiredDropCapabilities</a></code> | <code>string[]</code> | requiredDropCapabilities are the capabilities that will be dropped from the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup">runAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | run_as_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux">seLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | se_linux block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes">volumes</a></code> | <code>string[]</code> | volumes is an allowlist of volume plugins. |

---

##### `fsGroup`<sup>Required</sup> <a name="fsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup"></a>

```typescript
public readonly fsGroup: PodSecurityPolicySpecFsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#fs_group PodSecurityPolicy#fs_group}

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser"></a>

```typescript
public readonly runAsUser: PodSecurityPolicySpecRunAsUser;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_user PodSecurityPolicy#run_as_user}

---

##### `supplementalGroups`<sup>Required</sup> <a name="supplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups"></a>

```typescript
public readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroups;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#supplemental_groups PodSecurityPolicy#supplemental_groups}

---

##### `allowedCapabilities`<sup>Optional</sup> <a name="allowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities"></a>

```typescript
public readonly allowedCapabilities: string[];
```

- *Type:* string[]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_capabilities PodSecurityPolicy#allowed_capabilities}

---

##### `allowedFlexVolumes`<sup>Optional</sup> <a name="allowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes"></a>

```typescript
public readonly allowedFlexVolumes: IResolvable | PodSecurityPolicySpecAllowedFlexVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}

---

##### `allowedHostPaths`<sup>Optional</sup> <a name="allowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths"></a>

```typescript
public readonly allowedHostPaths: IResolvable | PodSecurityPolicySpecAllowedHostPaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_host_paths PodSecurityPolicy#allowed_host_paths}

---

##### `allowedProcMountTypes`<sup>Optional</sup> <a name="allowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes"></a>

```typescript
public readonly allowedProcMountTypes: string[];
```

- *Type:* string[]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}

---

##### `allowedUnsafeSysctls`<sup>Optional</sup> <a name="allowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls"></a>

```typescript
public readonly allowedUnsafeSysctls: string[];
```

- *Type:* string[]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}

---

##### `allowPrivilegeEscalation`<sup>Optional</sup> <a name="allowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation"></a>

```typescript
public readonly allowPrivilegeEscalation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}

---

##### `defaultAddCapabilities`<sup>Optional</sup> <a name="defaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities"></a>

```typescript
public readonly defaultAddCapabilities: string[];
```

- *Type:* string[]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_add_capabilities PodSecurityPolicy#default_add_capabilities}

---

##### `defaultAllowPrivilegeEscalation`<sup>Optional</sup> <a name="defaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation"></a>

```typescript
public readonly defaultAllowPrivilegeEscalation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}

---

##### `forbiddenSysctls`<sup>Optional</sup> <a name="forbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls"></a>

```typescript
public readonly forbiddenSysctls: string[];
```

- *Type:* string[]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}

---

##### `hostIpc`<sup>Optional</sup> <a name="hostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc"></a>

```typescript
public readonly hostIpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ipc PodSecurityPolicy#host_ipc}

---

##### `hostNetwork`<sup>Optional</sup> <a name="hostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_network PodSecurityPolicy#host_network}

---

##### `hostPid`<sup>Optional</sup> <a name="hostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid"></a>

```typescript
public readonly hostPid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_pid PodSecurityPolicy#host_pid}

---

##### `hostPorts`<sup>Optional</sup> <a name="hostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts"></a>

```typescript
public readonly hostPorts: IResolvable | PodSecurityPolicySpecHostPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#host_ports PodSecurityPolicy#host_ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#privileged PodSecurityPolicy#privileged}

---

##### `readOnlyRootFilesystem`<sup>Optional</sup> <a name="readOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem"></a>

```typescript
public readonly readOnlyRootFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}

---

##### `requiredDropCapabilities`<sup>Optional</sup> <a name="requiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities"></a>

```typescript
public readonly requiredDropCapabilities: string[];
```

- *Type:* string[]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}

---

##### `runAsGroup`<sup>Optional</sup> <a name="runAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: PodSecurityPolicySpecRunAsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#run_as_group PodSecurityPolicy#run_as_group}

---

##### `seLinux`<sup>Optional</sup> <a name="seLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux"></a>

```typescript
public readonly seLinux: PodSecurityPolicySpecSeLinux;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux PodSecurityPolicy#se_linux}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes"></a>

```typescript
public readonly volumes: string[];
```

- *Type:* string[]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#volumes PodSecurityPolicy#volumes}

---

### PodSecurityPolicySpecAllowedFlexVolumes <a name="PodSecurityPolicySpecAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecAllowedFlexVolumes: podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver">driver</a></code> | <code>string</code> | driver is the name of the Flexvolume driver. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

driver is the name of the Flexvolume driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#driver PodSecurityPolicy#driver}

---

### PodSecurityPolicySpecAllowedHostPaths <a name="PodSecurityPolicySpecAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecAllowedHostPaths: podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | pathPrefix is the path prefix that the host volume must match. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. |

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

pathPrefix is the path prefix that the host volume must match.

It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#path_prefix PodSecurityPolicy#path_prefix}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#read_only PodSecurityPolicy#read_only}

---

### PodSecurityPolicySpecFsGroup <a name="PodSecurityPolicySpecFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecFsGroup: podSecurityPolicy.PodSecurityPolicySpecFsGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule">rule</a></code> | <code>string</code> | rule is the strategy that will dictate what FSGroup is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range">range</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range"></a>

```typescript
public readonly range: IResolvable | PodSecurityPolicySpecFsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecFsGroupRange <a name="PodSecurityPolicySpecFsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecFsGroupRange: podSecurityPolicy.PodSecurityPolicySpecFsGroupRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max">max</a></code> | <code>number</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min">min</a></code> | <code>number</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecHostPorts <a name="PodSecurityPolicySpecHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecHostPorts: podSecurityPolicy.PodSecurityPolicySpecHostPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max">max</a></code> | <code>number</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min">min</a></code> | <code>number</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsGroup <a name="PodSecurityPolicySpecRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecRunAsGroup: podSecurityPolicy.PodSecurityPolicySpecRunAsGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule">rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable RunAsGroup values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range">range</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range"></a>

```typescript
public readonly range: IResolvable | PodSecurityPolicySpecRunAsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsGroupRange <a name="PodSecurityPolicySpecRunAsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecRunAsGroupRange: podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max">max</a></code> | <code>number</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min">min</a></code> | <code>number</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsUser <a name="PodSecurityPolicySpecRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecRunAsUser: podSecurityPolicy.PodSecurityPolicySpecRunAsUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule">rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable RunAsUser values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range">range</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range"></a>

```typescript
public readonly range: IResolvable | PodSecurityPolicySpecRunAsUserRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsUserRange <a name="PodSecurityPolicySpecRunAsUserRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecRunAsUserRange: podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max">max</a></code> | <code>number</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min">min</a></code> | <code>number</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecSeLinux <a name="PodSecurityPolicySpecSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecSeLinux: podSecurityPolicy.PodSecurityPolicySpecSeLinux = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule">rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable labels that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions">seLinuxOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]</code> | se_linux_options block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `seLinuxOptions`<sup>Optional</sup> <a name="seLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions"></a>

```typescript
public readonly seLinuxOptions: IResolvable | PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#se_linux_options PodSecurityPolicy#se_linux_options}

---

### PodSecurityPolicySpecSeLinuxSeLinuxOptions <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecSeLinuxSeLinuxOptions: podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#level PodSecurityPolicy#level}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#role PodSecurityPolicy#role}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#type PodSecurityPolicy#type}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#user PodSecurityPolicy#user}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#level PodSecurityPolicy#level}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#role PodSecurityPolicy#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#type PodSecurityPolicy#type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#user PodSecurityPolicy#user}.

---

### PodSecurityPolicySpecSupplementalGroups <a name="PodSecurityPolicySpecSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecSupplementalGroups: podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule">rule</a></code> | <code>string</code> | rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range">range</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]</code> | range block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range"></a>

```typescript
public readonly range: IResolvable | PodSecurityPolicySpecSupplementalGroupsRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecSupplementalGroupsRange <a name="PodSecurityPolicySpecSupplementalGroupsRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

const podSecurityPolicySpecSupplementalGroupsRange: podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max">max</a></code> | <code>number</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min">min</a></code> | <code>number</code> | min is the start of the range, inclusive. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#max PodSecurityPolicy#max}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/pod_security_policy#min PodSecurityPolicy#min}

---

## Classes <a name="Classes" id="Classes"></a>

### PodSecurityPolicyMetadataOutputReference <a name="PodSecurityPolicyMetadataOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicyMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---


### PodSecurityPolicySpecAllowedFlexVolumesList <a name="PodSecurityPolicySpecAllowedFlexVolumesList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecAllowedFlexVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecAllowedFlexVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]

---


### PodSecurityPolicySpecAllowedFlexVolumesOutputReference <a name="PodSecurityPolicySpecAllowedFlexVolumesOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecAllowedFlexVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>

---


### PodSecurityPolicySpecAllowedHostPathsList <a name="PodSecurityPolicySpecAllowedHostPathsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecAllowedHostPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecAllowedHostPaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]

---


### PodSecurityPolicySpecAllowedHostPathsOutputReference <a name="PodSecurityPolicySpecAllowedHostPathsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecAllowedHostPaths;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>

---


### PodSecurityPolicySpecFsGroupOutputReference <a name="PodSecurityPolicySpecFsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange">resetRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange"></a>

```typescript
public putRange(value: IResolvable | PodSecurityPolicySpecFsGroupRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput">rangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range"></a>

```typescript
public readonly range: PodSecurityPolicySpecFsGroupRangeList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: IResolvable | PodSecurityPolicySpecFsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpecFsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---


### PodSecurityPolicySpecFsGroupRangeList <a name="PodSecurityPolicySpecFsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecFsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecFsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>[]

---


### PodSecurityPolicySpecFsGroupRangeOutputReference <a name="PodSecurityPolicySpecFsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecFsGroupRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange">PodSecurityPolicySpecFsGroupRange</a>

---


### PodSecurityPolicySpecHostPortsList <a name="PodSecurityPolicySpecHostPortsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecHostPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecHostPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecHostPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]

---


### PodSecurityPolicySpecHostPortsOutputReference <a name="PodSecurityPolicySpecHostPortsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecHostPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>

---


### PodSecurityPolicySpecOutputReference <a name="PodSecurityPolicySpecOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes">putAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths">putAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup">putFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts">putHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup">putRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser">putRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux">putSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups">putSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities">resetAllowedCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes">resetAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths">resetAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes">resetAllowedProcMountTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls">resetAllowedUnsafeSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation">resetAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities">resetDefaultAddCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation">resetDefaultAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls">resetForbiddenSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc">resetHostIpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork">resetHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid">resetHostPid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts">resetHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem">resetReadOnlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities">resetRequiredDropCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup">resetRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux">resetSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedFlexVolumes` <a name="putAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes"></a>

```typescript
public putAllowedFlexVolumes(value: IResolvable | PodSecurityPolicySpecAllowedFlexVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]

---

##### `putAllowedHostPaths` <a name="putAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths"></a>

```typescript
public putAllowedHostPaths(value: IResolvable | PodSecurityPolicySpecAllowedHostPaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]

---

##### `putFsGroup` <a name="putFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup"></a>

```typescript
public putFsGroup(value: PodSecurityPolicySpecFsGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---

##### `putHostPorts` <a name="putHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts"></a>

```typescript
public putHostPorts(value: IResolvable | PodSecurityPolicySpecHostPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]

---

##### `putRunAsGroup` <a name="putRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup"></a>

```typescript
public putRunAsGroup(value: PodSecurityPolicySpecRunAsGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---

##### `putRunAsUser` <a name="putRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser"></a>

```typescript
public putRunAsUser(value: PodSecurityPolicySpecRunAsUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---

##### `putSeLinux` <a name="putSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux"></a>

```typescript
public putSeLinux(value: PodSecurityPolicySpecSeLinux): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---

##### `putSupplementalGroups` <a name="putSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups"></a>

```typescript
public putSupplementalGroups(value: PodSecurityPolicySpecSupplementalGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---

##### `resetAllowedCapabilities` <a name="resetAllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities"></a>

```typescript
public resetAllowedCapabilities(): void
```

##### `resetAllowedFlexVolumes` <a name="resetAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes"></a>

```typescript
public resetAllowedFlexVolumes(): void
```

##### `resetAllowedHostPaths` <a name="resetAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths"></a>

```typescript
public resetAllowedHostPaths(): void
```

##### `resetAllowedProcMountTypes` <a name="resetAllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes"></a>

```typescript
public resetAllowedProcMountTypes(): void
```

##### `resetAllowedUnsafeSysctls` <a name="resetAllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls"></a>

```typescript
public resetAllowedUnsafeSysctls(): void
```

##### `resetAllowPrivilegeEscalation` <a name="resetAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation"></a>

```typescript
public resetAllowPrivilegeEscalation(): void
```

##### `resetDefaultAddCapabilities` <a name="resetDefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities"></a>

```typescript
public resetDefaultAddCapabilities(): void
```

##### `resetDefaultAllowPrivilegeEscalation` <a name="resetDefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation"></a>

```typescript
public resetDefaultAllowPrivilegeEscalation(): void
```

##### `resetForbiddenSysctls` <a name="resetForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls"></a>

```typescript
public resetForbiddenSysctls(): void
```

##### `resetHostIpc` <a name="resetHostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc"></a>

```typescript
public resetHostIpc(): void
```

##### `resetHostNetwork` <a name="resetHostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork"></a>

```typescript
public resetHostNetwork(): void
```

##### `resetHostPid` <a name="resetHostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid"></a>

```typescript
public resetHostPid(): void
```

##### `resetHostPorts` <a name="resetHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts"></a>

```typescript
public resetHostPorts(): void
```

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged"></a>

```typescript
public resetPrivileged(): void
```

##### `resetReadOnlyRootFilesystem` <a name="resetReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem"></a>

```typescript
public resetReadOnlyRootFilesystem(): void
```

##### `resetRequiredDropCapabilities` <a name="resetRequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities"></a>

```typescript
public resetRequiredDropCapabilities(): void
```

##### `resetRunAsGroup` <a name="resetRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup"></a>

```typescript
public resetRunAsGroup(): void
```

##### `resetSeLinux` <a name="resetSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux"></a>

```typescript
public resetSeLinux(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes">allowedFlexVolumes</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths">allowedHostPaths</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup">fsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts">hostPorts</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup">runAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser">runAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux">seLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups">supplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput">allowedCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput">allowedFlexVolumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput">allowedHostPathsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput">allowedProcMountTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput">allowedUnsafeSysctlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput">allowPrivilegeEscalationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput">defaultAddCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput">defaultAllowPrivilegeEscalationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput">forbiddenSysctlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput">fsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput">hostIpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput">hostNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput">hostPidInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput">hostPortsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput">privilegedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput">readOnlyRootFilesystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput">requiredDropCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput">runAsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput">seLinuxInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput">supplementalGroupsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput">volumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities">allowedCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes">allowedProcMountTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls">allowedUnsafeSysctls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation">allowPrivilegeEscalation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities">defaultAddCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation">defaultAllowPrivilegeEscalation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls">forbiddenSysctls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc">hostIpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork">hostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid">hostPid</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem">readOnlyRootFilesystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities">requiredDropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes">volumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedFlexVolumes`<sup>Required</sup> <a name="allowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes"></a>

```typescript
public readonly allowedFlexVolumes: PodSecurityPolicySpecAllowedFlexVolumesList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a>

---

##### `allowedHostPaths`<sup>Required</sup> <a name="allowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths"></a>

```typescript
public readonly allowedHostPaths: PodSecurityPolicySpecAllowedHostPathsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a>

---

##### `fsGroup`<sup>Required</sup> <a name="fsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup"></a>

```typescript
public readonly fsGroup: PodSecurityPolicySpecFsGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a>

---

##### `hostPorts`<sup>Required</sup> <a name="hostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts"></a>

```typescript
public readonly hostPorts: PodSecurityPolicySpecHostPortsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a>

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: PodSecurityPolicySpecRunAsGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a>

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: PodSecurityPolicySpecRunAsUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a>

---

##### `seLinux`<sup>Required</sup> <a name="seLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux"></a>

```typescript
public readonly seLinux: PodSecurityPolicySpecSeLinuxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a>

---

##### `supplementalGroups`<sup>Required</sup> <a name="supplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups"></a>

```typescript
public readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroupsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a>

---

##### `allowedCapabilitiesInput`<sup>Optional</sup> <a name="allowedCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput"></a>

```typescript
public readonly allowedCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `allowedFlexVolumesInput`<sup>Optional</sup> <a name="allowedFlexVolumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput"></a>

```typescript
public readonly allowedFlexVolumesInput: IResolvable | PodSecurityPolicySpecAllowedFlexVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes">PodSecurityPolicySpecAllowedFlexVolumes</a>[]

---

##### `allowedHostPathsInput`<sup>Optional</sup> <a name="allowedHostPathsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput"></a>

```typescript
public readonly allowedHostPathsInput: IResolvable | PodSecurityPolicySpecAllowedHostPaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths">PodSecurityPolicySpecAllowedHostPaths</a>[]

---

##### `allowedProcMountTypesInput`<sup>Optional</sup> <a name="allowedProcMountTypesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput"></a>

```typescript
public readonly allowedProcMountTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="allowedUnsafeSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput"></a>

```typescript
public readonly allowedUnsafeSysctlsInput: string[];
```

- *Type:* string[]

---

##### `allowPrivilegeEscalationInput`<sup>Optional</sup> <a name="allowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput"></a>

```typescript
public readonly allowPrivilegeEscalationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultAddCapabilitiesInput`<sup>Optional</sup> <a name="defaultAddCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput"></a>

```typescript
public readonly defaultAddCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `defaultAllowPrivilegeEscalationInput`<sup>Optional</sup> <a name="defaultAllowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput"></a>

```typescript
public readonly defaultAllowPrivilegeEscalationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forbiddenSysctlsInput`<sup>Optional</sup> <a name="forbiddenSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput"></a>

```typescript
public readonly forbiddenSysctlsInput: string[];
```

- *Type:* string[]

---

##### `fsGroupInput`<sup>Optional</sup> <a name="fsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput"></a>

```typescript
public readonly fsGroupInput: PodSecurityPolicySpecFsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---

##### `hostIpcInput`<sup>Optional</sup> <a name="hostIpcInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput"></a>

```typescript
public readonly hostIpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNetworkInput`<sup>Optional</sup> <a name="hostNetworkInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput"></a>

```typescript
public readonly hostNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostPidInput`<sup>Optional</sup> <a name="hostPidInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput"></a>

```typescript
public readonly hostPidInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostPortsInput`<sup>Optional</sup> <a name="hostPortsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput"></a>

```typescript
public readonly hostPortsInput: IResolvable | PodSecurityPolicySpecHostPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts">PodSecurityPolicySpecHostPorts</a>[]

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput"></a>

```typescript
public readonly privilegedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFilesystemInput`<sup>Optional</sup> <a name="readOnlyRootFilesystemInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput"></a>

```typescript
public readonly readOnlyRootFilesystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredDropCapabilitiesInput`<sup>Optional</sup> <a name="requiredDropCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput"></a>

```typescript
public readonly requiredDropCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `runAsGroupInput`<sup>Optional</sup> <a name="runAsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput"></a>

```typescript
public readonly runAsGroupInput: PodSecurityPolicySpecRunAsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: PodSecurityPolicySpecRunAsUser;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---

##### `seLinuxInput`<sup>Optional</sup> <a name="seLinuxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput"></a>

```typescript
public readonly seLinuxInput: PodSecurityPolicySpecSeLinux;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---

##### `supplementalGroupsInput`<sup>Optional</sup> <a name="supplementalGroupsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput"></a>

```typescript
public readonly supplementalGroupsInput: PodSecurityPolicySpecSupplementalGroups;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: string[];
```

- *Type:* string[]

---

##### `allowedCapabilities`<sup>Required</sup> <a name="allowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities"></a>

```typescript
public readonly allowedCapabilities: string[];
```

- *Type:* string[]

---

##### `allowedProcMountTypes`<sup>Required</sup> <a name="allowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes"></a>

```typescript
public readonly allowedProcMountTypes: string[];
```

- *Type:* string[]

---

##### `allowedUnsafeSysctls`<sup>Required</sup> <a name="allowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls"></a>

```typescript
public readonly allowedUnsafeSysctls: string[];
```

- *Type:* string[]

---

##### `allowPrivilegeEscalation`<sup>Required</sup> <a name="allowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation"></a>

```typescript
public readonly allowPrivilegeEscalation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultAddCapabilities`<sup>Required</sup> <a name="defaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities"></a>

```typescript
public readonly defaultAddCapabilities: string[];
```

- *Type:* string[]

---

##### `defaultAllowPrivilegeEscalation`<sup>Required</sup> <a name="defaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation"></a>

```typescript
public readonly defaultAllowPrivilegeEscalation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forbiddenSysctls`<sup>Required</sup> <a name="forbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls"></a>

```typescript
public readonly forbiddenSysctls: string[];
```

- *Type:* string[]

---

##### `hostIpc`<sup>Required</sup> <a name="hostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc"></a>

```typescript
public readonly hostIpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNetwork`<sup>Required</sup> <a name="hostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostPid`<sup>Required</sup> <a name="hostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid"></a>

```typescript
public readonly hostPid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFilesystem`<sup>Required</sup> <a name="readOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem"></a>

```typescript
public readonly readOnlyRootFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredDropCapabilities`<sup>Required</sup> <a name="requiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities"></a>

```typescript
public readonly requiredDropCapabilities: string[];
```

- *Type:* string[]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes"></a>

```typescript
public readonly volumes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---


### PodSecurityPolicySpecRunAsGroupOutputReference <a name="PodSecurityPolicySpecRunAsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange">resetRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange"></a>

```typescript
public putRange(value: IResolvable | PodSecurityPolicySpecRunAsGroupRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput">rangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range"></a>

```typescript
public readonly range: PodSecurityPolicySpecRunAsGroupRangeList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: IResolvable | PodSecurityPolicySpecRunAsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpecRunAsGroup;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---


### PodSecurityPolicySpecRunAsGroupRangeList <a name="PodSecurityPolicySpecRunAsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecRunAsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecRunAsGroupRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>[]

---


### PodSecurityPolicySpecRunAsGroupRangeOutputReference <a name="PodSecurityPolicySpecRunAsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecRunAsGroupRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange">PodSecurityPolicySpecRunAsGroupRange</a>

---


### PodSecurityPolicySpecRunAsUserOutputReference <a name="PodSecurityPolicySpecRunAsUserOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange">resetRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange"></a>

```typescript
public putRange(value: IResolvable | PodSecurityPolicySpecRunAsUserRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput">rangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range"></a>

```typescript
public readonly range: PodSecurityPolicySpecRunAsUserRangeList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: IResolvable | PodSecurityPolicySpecRunAsUserRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpecRunAsUser;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---


### PodSecurityPolicySpecRunAsUserRangeList <a name="PodSecurityPolicySpecRunAsUserRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecRunAsUserRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecRunAsUserRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>[]

---


### PodSecurityPolicySpecRunAsUserRangeOutputReference <a name="PodSecurityPolicySpecRunAsUserRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecRunAsUserRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange">PodSecurityPolicySpecRunAsUserRange</a>

---


### PodSecurityPolicySpecSeLinuxOutputReference <a name="PodSecurityPolicySpecSeLinuxOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions">putSeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions">resetSeLinuxOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSeLinuxOptions` <a name="putSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions"></a>

```typescript
public putSeLinuxOptions(value: IResolvable | PodSecurityPolicySpecSeLinuxSeLinuxOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]

---

##### `resetSeLinuxOptions` <a name="resetSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions"></a>

```typescript
public resetSeLinuxOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions">seLinuxOptions</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput">seLinuxOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `seLinuxOptions`<sup>Required</sup> <a name="seLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions"></a>

```typescript
public readonly seLinuxOptions: PodSecurityPolicySpecSeLinuxSeLinuxOptionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `seLinuxOptionsInput`<sup>Optional</sup> <a name="seLinuxOptionsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput"></a>

```typescript
public readonly seLinuxOptionsInput: IResolvable | PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpecSeLinux;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsList <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>[]

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecSeLinuxSeLinuxOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions">PodSecurityPolicySpecSeLinuxSeLinuxOptions</a>

---


### PodSecurityPolicySpecSupplementalGroupsOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange">resetRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange"></a>

```typescript
public putRange(value: IResolvable | PodSecurityPolicySpecSupplementalGroupsRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput">rangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range"></a>

```typescript
public readonly range: PodSecurityPolicySpecSupplementalGroupsRangeList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: IResolvable | PodSecurityPolicySpecSupplementalGroupsRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PodSecurityPolicySpecSupplementalGroups;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---


### PodSecurityPolicySpecSupplementalGroupsRangeList <a name="PodSecurityPolicySpecSupplementalGroupsRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get"></a>

```typescript
public get(index: number): PodSecurityPolicySpecSupplementalGroupsRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecSupplementalGroupsRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>[]

---


### PodSecurityPolicySpecSupplementalGroupsRangeOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer"></a>

```typescript
import { podSecurityPolicy } from '@cdktf/provider-kubernetes'

new podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PodSecurityPolicySpecSupplementalGroupsRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange">PodSecurityPolicySpecSupplementalGroupsRange</a>

---



